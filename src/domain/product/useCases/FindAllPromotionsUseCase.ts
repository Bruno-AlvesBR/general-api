import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import { IProductData } from '../data';
import { IProduct } from '../entities';

@injectable()
class FindAllPromotionsUseCase
  implements IUseCase<void, Array<IProduct>>
{
  constructor(
    @inject('ProductDataProvider')
    private productProvider: IProductData
  ) {}

  async execute(): Promise<Array<IProduct>> {
    return this.productProvider.findAllPromotions();
  }
}

export { FindAllPromotionsUseCase };
