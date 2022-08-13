import { IFoodProps } from '../entities/IFoodEntity';

export default interface IProductData {
  create(props: IFoodProps): Promise<IFoodProps>;
  update(data: IFoodProps): Promise<IFoodProps>;
  findAll(): Promise<IFoodProps[]>;
  findBySlug(slug: string): Promise<IFoodProps>;
  delete(id: string): Promise<IFoodProps>;
}
