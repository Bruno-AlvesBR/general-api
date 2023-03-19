import { IProduct } from '@domain/product/entities';
import { ICart } from '../entities';

export interface ICartDTO {
  id: string;
  productsId: Array<string>;
}

export interface ICreateCartDTO {
  id: string;
  userId: string;
}

export interface IRemoveProductCartDTO {
  id: string;
  productsId: Array<string>;
}

abstract class ICartData {
  abstract createCart(data: ICreateCartDTO): Promise<void>;

  abstract addProductToCart(data: ICartDTO): Promise<ICart>;

  abstract findAll(id: string): Promise<Array<IProduct>>;

  abstract removeProductIntoCart(
    data: IRemoveProductCartDTO
  ): Promise<ICart>;
}

export { ICartData };
