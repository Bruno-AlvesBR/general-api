import IUseCase from '../../../core/UseCase';
import { inject, injectable } from 'tsyringe';

import IProductData from '../data';
import { IProduct } from '../entities';

@injectable()
export default class ProductFindByIdUseCase
  implements IUseCase<string, IProduct>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(requestDTO?: string): Promise<IProduct> {
    return this.productDataProvider.findById(requestDTO);
  }
}
