import { IProduct } from '@domain/product/entities';
import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICartData, IFindAllDTO } from '../data';

@injectable()
class CartFindAllProductsUseCase
  implements IUseCase<IFindAllDTO, Array<IProduct>>
{
  constructor(
    @inject('CartDataProvider')
    private cartDataProvider: ICartData
  ) {}

  async execute(requestDTO: IFindAllDTO): Promise<Array<IProduct>> {
    return this.cartDataProvider.findAll(requestDTO);
  }
}

export { CartFindAllProductsUseCase };
