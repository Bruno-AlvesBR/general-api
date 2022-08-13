import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IProductData from '../data';
import { IFoodProps } from '../entities/IFoodEntity';

@injectable()
export default class ProductCreateUseCase
  implements IUseCase<IFoodProps, IFoodProps>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  public async execute(requestDTO: IFoodProps): Promise<IFoodProps> {
    return this.productDataProvider.create(requestDTO);
  }
}
