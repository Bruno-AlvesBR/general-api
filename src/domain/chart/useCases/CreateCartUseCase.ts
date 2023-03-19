import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICartData, ICreateCartDTO } from '../data';

@injectable()
class CreateCartUseCase implements IUseCase<ICreateCartDTO, void> {
  constructor(
    @inject('CartDataProvider')
    private cartProvider: ICartData
  ) {}

  async execute(requestDTO: ICreateCartDTO): Promise<void> {
    return this.cartProvider.createCart(requestDTO);
  }
}

export { CreateCartUseCase };
