import dayjs from 'dayjs';
import { Types } from 'mongoose';

import { IProductData } from '@domain/product/data';
import { IProduct } from '@domain/product/entities';
import { Product } from '../../../database/models/product/ProductSchema';
import { User } from '../../../database/models/user/UserSchema';

const defaultProject = {
  $project: {
    _id: 0,
    id: 1,
    title: 1,
    slug: 1,
    image: {
      mobileSrc: 1,
      desktopSrc: 1,
    },
    isPromotion: 1,
    discountPercentage: 1,
    category: 1,
    price: {
      priceNumber: 1,
      newPriceDiscount: 1,
      installment: {
        monthInstallment: 1,
        pricePerMonth: 1,
      },
    },
    rating: 1,
    createdAt: 1,
  },
};

export default class ProductDataProvider implements IProductData {
  async findAllProductsCart(id: string): Promise<Array<IProduct>> {
    try {
      const sla = await User.aggregate([
        { $match: { id } },
        {
          $lookup: {
            let: {
              id: '$id',
            },
            from: 'Products',
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['cart.products', '$$id'],
                  },
                },
              },
            ],
            as: 'test',
          },
        },
      ]);

      return sla;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async findAllPromotions(): Promise<IProduct[]> {
    try {
      const products = await Product.aggregate([
        {
          $match: {
            isPromotion: { $eq: true },
          },
        },
        defaultProject,
      ]);

      return products;
    } catch {
      return [];
    }
  }

  async findAllReleases(): Promise<Array<IProduct>> {
    try {
      const products = await Product.aggregate([
        {
          $match: {
            createdAt: {
              $gte: dayjs().subtract(2, 'day').toDate(),
            },
          },
        },
        defaultProject,
      ]);

      return products;
    } catch {
      return [];
    }
  }

  async findAllByCategory(
    category: string
  ): Promise<Array<IProduct>> {
    try {
      const products = Product.aggregate([
        { $match: { category } },
        defaultProject,
      ]);

      return products;
    } catch {
      return [];
    }
  }

  public async create(props: IProduct): Promise<IProduct> {
    const createProduct = new Product<IProduct>(props);

    const saveProduct: IProduct = await createProduct.save();

    if (!createProduct) {
      throw new Error('Unexpected error ocurred!');
    }

    return saveProduct;
  }

  public async update(data: IProduct): Promise<IProduct> {
    const updateProduct = await Product?.findOneAndUpdate<IProduct>(
      { id: data?.id },
      {
        ...data,
      }
    );

    if (!updateProduct) {
      throw new Error('Cannot update product data');
    }

    return updateProduct;
  }

  public async findAll(): Promise<IProduct[]> {
    const findAllProducts = await Product?.find<IProduct>();

    if (!findAllProducts) {
      throw new Error('Unexpected error to search all products!');
    }

    return findAllProducts;
  }

  public async findBySlug(slug: string): Promise<IProduct> {
    const findProductBySlug = await Product?.findOne<IProduct>({
      slug,
    });

    if (!findProductBySlug) {
      throw new Error('Cannot find product by id');
    }

    return findProductBySlug;
  }

  public async findById(id: string): Promise<IProduct> {
    const findProductById = await Product?.findOne<IProduct>({
      id,
    });

    if (!findProductById) {
      throw new Error('Cannot find product by id');
    }

    return findProductById;
  }

  public async delete(id: string): Promise<IProduct> {
    const findAndDelete = await Product?.findOneAndDelete<IProduct>({
      id,
    });

    if (!findAndDelete) {
      throw new Error('Cannot find and delete this item');
    }

    return findAndDelete;
  }
}
