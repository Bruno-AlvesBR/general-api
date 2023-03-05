import { inject, injectable } from 'tsyringe';

import { IProductData } from '../data';
import { IProduct } from '../entities';
import IUseCase from 'core/UseCase';

@injectable()
class FindAllProductsCartUseCase
  implements IUseCase<string, Array<IProduct>>
{
  constructor(
    @inject('ProductDataProvider')
    private productProvider: IProductData
  ) {}

  async execute(requestDTO: string): Promise<Array<IProduct>> {
    return this.productProvider.findAllProductsCart(requestDTO);
  }
}

export { FindAllProductsCartUseCase };
