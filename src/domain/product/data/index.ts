import { IProduct } from '../entities';

abstract class IProductData {
  abstract create(props: IProduct): Promise<IProduct>;
  abstract update(data: IProduct): Promise<IProduct>;
  abstract findAll(): Promise<IProduct[]>;
  abstract findBySlug(slug: string): Promise<IProduct>;
  abstract findById(id?: string): Promise<IProduct>;
  abstract delete(id: string): Promise<IProduct>;
  abstract findAllByCategory(
    category: string
  ): Promise<Array<IProduct>>;
  abstract findAllReleases(): Promise<Array<IProduct>>;
  abstract findAllPromotions(): Promise<Array<IProduct>>;
}

export { IProductData };
