import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import IProductData from '../data';
import { IFoodProps } from '../entities/IFoodEntity';

@injectable()
export default class ProductFindByIdUseCase
  implements IUseCase<string, IFoodProps>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(requestDTO?: string): Promise<IFoodProps> {
    return this.productDataProvider.findById(requestDTO);
  }
}
