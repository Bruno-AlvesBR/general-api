import { ICategory } from '../entities';

export interface IParamsDTO {
  limit: number;
  offset: number;
}

export interface IUpdateCategoryDTO {
  id: string;
  data: ICategory;
}

abstract class ICategoryData {
  abstract createCategory(data: ICategory): Promise<ICategory>;

  abstract updateCategory(
    props: IUpdateCategoryDTO
  ): Promise<ICategory>;

  abstract deleteCategory(id: string): Promise<void>;

  abstract findAllCategories(
    props: IParamsDTO
  ): Promise<Array<ICategory>>;

  abstract findCategoryById(id: string): Promise<ICategory>;
}

export { ICategoryData };
