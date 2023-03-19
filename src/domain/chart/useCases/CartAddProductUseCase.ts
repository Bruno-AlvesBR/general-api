import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICartData, ICartDTO } from '../data';
import { ICart } from '../entities';

@injectable()
class CartAddProductUseCase implements IUseCase<ICartDTO, ICart> {
  constructor(
    @inject('CartDataProvider')
    private cartDataProvider: ICartData
  ) {}

  public async execute(requestDTO: ICartDTO): Promise<ICart> {
    return this.cartDataProvider.addProductToCart(requestDTO);
  }
}

export { CartAddProductUseCase };
