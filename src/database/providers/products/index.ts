import dayjs from 'dayjs';

import {
  IFindByFiltersDTO,
  IProductData,
} from '@domain/product/data';
import { IProduct, IProductCard } from '@domain/product/entities';
import { Product } from '../../../database/models/product/ProductSchema';

const defaultProject = {
  $project: {
    _id: 0,
    id: 1,
    title: 1,
    slug: 1,
    images: 1,
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
  async findByFilters({
    limit,
    offset,
    ...filters
  }: IFindByFiltersDTO): Promise<Array<IProductCard>> {
    try {
      const filtersArray = Object.entries(filters);
      const verifyFilters = (filter: string) =>
        String(filter).includes(',') ? filter.split(',') : [filter];

      const filtersQuery = filtersArray.map((filter) => ({
        $in: ['$'.concat(filter[0]), verifyFilters(filter[1])],
      }));

      const products = await Product.aggregate([
        { $unwind: { path: '$category' } },
        {
          $match: {
            $expr: { $and: filtersQuery },
          },
        },
      ])
        .skip(Number(offset))
        .limit(Number(limit));

      return products;
    } catch (error) {
      throw new Error(error);
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
      const products = await Product.aggregate([
        { $match: { category } },
        defaultProject,
      ]);

      return products;
    } catch {
      return [];
    }
  }

  public async create(data: IProduct): Promise<IProduct> {
    try {
      const createProduct = new Product<IProduct>(data);
      const saveProduct: IProduct = await createProduct.save();

      return saveProduct;
    } catch (error) {
      throw new Error(`Unexpected error ocurred!: ${error}`);
    }
  }

  public async update(data: IProduct): Promise<IProduct> {
    try {
      const updateProduct = await Product.findOneAndUpdate<IProduct>(
        { id: data?.id },
        { ...data }
      );

      return updateProduct || {};
    } catch (error) {
      throw new Error(`Cannot update product data!: ${error}`);
    }
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
