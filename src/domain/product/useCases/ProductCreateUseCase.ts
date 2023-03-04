import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import { IProductData } from '../data';
import { IProduct } from '../entities';

@injectable()
export default class ProductCreateUseCase
  implements IUseCase<IProduct, IProduct>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(requestDTO: IProduct): Promise<IProduct> {
    return this.productDataProvider.create(requestDTO);
  }
}
