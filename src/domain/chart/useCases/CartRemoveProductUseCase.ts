import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICartData, IRemoveProductCartDTO } from './../data';
import { ICart } from '../entities';

@injectable()
class CartRemoveProductUseCase
  implements IUseCase<IRemoveProductCartDTO, ICart>
{
  constructor(
    @inject('CartDataProvider')
    private cartProvider: ICartData
  ) {}

  async execute(requestDTO: IRemoveProductCartDTO): Promise<ICart> {
    return this.cartProvider.removeProductIntoCart(requestDTO);
  }
}

export { CartRemoveProductUseCase };
