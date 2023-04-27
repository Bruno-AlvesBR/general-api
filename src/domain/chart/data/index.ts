import { IProduct } from '@domain/product/entities';
import { ICart } from '../entities';

export interface IFindAllDTO {
  ids: string;
}

abstract class ICartData {
  abstract findAll({ ids }: IFindAllDTO): Promise<Array<IProduct>>;
}

export { ICartData };
