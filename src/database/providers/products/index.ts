import IProductData from '@domain/product/data';
import { IFoodProps } from '@domain/product/entities/IFoodEntity';
import { Food } from '../../../database/models/product/FoodSchema';

export default class ProductDataProvider implements IProductData {
  public async create(props: IFoodProps) {
    const createProduct = new Food(props);

    const saveProduct: IFoodProps = await createProduct.save();

    if (!createProduct) {
      throw new Error('Unexpected error ocurred!');
    }

    return saveProduct;
  }

  public async update(data: IFoodProps) {
    const updateFood = await Food?.findOneAndUpdate(
      { id: data?.id },
      {
        ...data,
      }
    );

    if (!updateFood) {
      throw new Error('Cannot update food data');
    }

    return updateFood;
  }

  public async findAll() {
    const findAllProducts = await Food?.find();

    if (!findAllProducts) {
      throw new Error('Unexpected error to search all products!');
    }

    return findAllProducts;
  }

  public async findBySlug(slug: string) {
    const findFoodBySlug = await Food?.findOne({
      slug,
    });

    if (!findFoodBySlug) {
      throw new Error('Cannot find product by id');
    }

    return findFoodBySlug;
  }

  public async delete(id: string) {
    const findAndDelete = await Food?.findOneAndDelete({
      id,
    });

    if (!findAndDelete) {
      throw new Error('Cannot find and delete this item');
    }

    return findAndDelete;
  }
}
