import IProductData from '@domain/product/data';
import { IFoodProps } from '@domain/product/entities/IFoodEntity';
import { Food } from '../../../database/models/product/FoodSchema';

export default class ProductDataProvider implements IProductData {
  public async create(props: IFoodProps): Promise<IFoodProps> {
    const createProduct = new Food<IFoodProps>(props);

    const saveProduct: IFoodProps = await createProduct.save();

    if (!createProduct) {
      throw new Error('Unexpected error ocurred!');
    }

    return saveProduct;
  }

  public async update(data: IFoodProps): Promise<IFoodProps> {
    const updateFood = await Food?.findOneAndUpdate<IFoodProps>(
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

  public async findAll(): Promise<IFoodProps[]> {
    const findAllProducts = await Food?.find<IFoodProps>();

    if (!findAllProducts) {
      throw new Error('Unexpected error to search all products!');
    }

    return findAllProducts;
  }

  public async findBySlug(slug: string): Promise<IFoodProps> {
    const findFoodBySlug = await Food?.findOne<IFoodProps>({
      slug,
    });

    if (!findFoodBySlug) {
      throw new Error('Cannot find product by id');
    }

    return findFoodBySlug;
  }

  public async findById(id: string): Promise<IFoodProps> {
    const findFoodById = await Food?.findOne<IFoodProps>({
      id,
    });

    if (!findFoodById) {
      throw new Error('Cannot find product by id');
    }

    return findFoodById;
  }

  public async delete(id: string): Promise<IFoodProps> {
    const findAndDelete = await Food?.findOneAndDelete<IFoodProps>({
      id,
    });

    if (!findAndDelete) {
      throw new Error('Cannot find and delete this item');
    }

    return findAndDelete;
  }
}
