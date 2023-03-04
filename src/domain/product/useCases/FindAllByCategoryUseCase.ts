import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import { IProductData } from '../data';
import { IProduct } from '../entities';

@injectable()
class FindAllByCategoryUseCase
  implements IUseCase<string, Array<IProduct>>
{
  constructor(
    @inject('ProductDataProvider')
    private productProvider: IProductData
  ) {}

  async execute(requestDTO: string): Promise<Array<IProduct>> {
    return this.productProvider.findAllByCategory(requestDTO);
  }
}

export { FindAllByCategoryUseCase };
