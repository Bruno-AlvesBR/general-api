import { IProduct, IProductCard } from '../entities';

export interface IFiltersDTO {
  [key: string]: string;
}

interface IParamsDTO {
  limit: number;
  offset: number;
}

export type IFindByFiltersDTO = IFiltersDTO;

abstract class IProductData {
  abstract create(props: IProduct): Promise<IProduct>;
  abstract update(data: IProduct): Promise<IProduct>;
  abstract findAll(): Promise<Array<IProduct>>;
  abstract findBySlug(slug: string): Promise<IProduct>;
  abstract findById(id?: string): Promise<IProduct>;
  abstract delete(id: string): Promise<IProduct>;
  abstract findAllByCategory(
    category: string
  ): Promise<Array<IProduct>>;
  abstract findAllReleases(): Promise<Array<IProduct>>;
  abstract findAllPromotions(): Promise<Array<IProduct>>;
  abstract findByFilters(
    props: IFindByFiltersDTO
  ): Promise<Array<IProductCard>>;
}

export { IProductData };
