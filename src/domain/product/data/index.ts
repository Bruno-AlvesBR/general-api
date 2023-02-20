import { IProduct } from '../entities';

export default interface IProductData {
  create(props: IProduct): Promise<IProduct>;
  update(data: IProduct): Promise<IProduct>;
  findAll(): Promise<IProduct[]>;
  findBySlug(slug: string): Promise<IProduct>;
  findById(id?: string): Promise<IProduct>;
  delete(id: string): Promise<IProduct>;
}
