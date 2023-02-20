import IProductData from '@domain/product/data';
import { IProduct } from '@domain/product/entities';
import { Product } from '../../../database/models/product/ProductSchema';

export default class ProductDataProvider implements IProductData {
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
