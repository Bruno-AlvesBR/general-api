import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import IProductData from '../data';
import { IProduct } from '../entities';

@injectable()
export default class ProductCreateUseCase
  implements IUseCase<void, IProduct[]>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(): Promise<IProduct[]> {
    return this.productDataProvider.findAll();
  }
}
