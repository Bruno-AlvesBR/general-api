import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import IProductData from '../data';
import { IProduct } from '../entities';

@injectable()
export default class ProductDeleteUseCase
  implements IUseCase<any, IProduct>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(requestDTO?: any): Promise<IProduct> {
    return this.productDataProvider.delete(requestDTO);
  }
}
