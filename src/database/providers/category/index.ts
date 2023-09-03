import {
  ICategoryData,
  IParamsDTO,
  IUpdateCategoryDTO,
} from '../../../domain/categories/data';
import { ICategory } from '../../../domain/categories/entities';
import { CategoryModel } from '../../../database/models/category';

class CategoryProvider implements ICategoryData {
  async createCategory(data: ICategory): Promise<ICategory> {
    try {
      const category = await CategoryModel.create<ICategory>(data);

      const savedCategory = await category.save();

      return savedCategory;
    } catch (error) {
      throw new Error(
        `An error ocurred on create category on provider: ${error}`
      );
    }
  }

  async updateCategory({
    id,
    data,
  }: IUpdateCategoryDTO): Promise<ICategory> {
    try {
      await CategoryModel.findOneAndUpdate({ id }, data);

      const updatedCategory = await CategoryModel.findOne({ id });

      return updatedCategory;
    } catch (error) {
      throw new Error(
        `An error ocurred on update the category on provider: ${error}`
      );
    }
  }

  async deleteCategory(id: string): Promise<void> {
    try {
      console.log('test', id);
      await CategoryModel.findOneAndDelete({ id });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async findAllCategories({
    limit,
    offset,
  }: IParamsDTO): Promise<Array<ICategory>> {
    try {
      const categories = await CategoryModel.find()
        .sort({ updatedAt: -1 })
        .skip(offset)
        .limit(limit);

      return categories;
    } catch (error) {
      throw new Error(
        `An error ocurred on find all categories on provider: ${error}`
      );
    }
  }

  async findCategoryById(id: string): Promise<ICategory> {
    try {
      const category = await CategoryModel.findOne({ id });

      return category;
    } catch (error) {
      throw new Error(
        `An error ocurred on find category by id on provider: ${error}`
      );
    }
  }
}

export { CategoryProvider };
