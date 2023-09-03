import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import { IFindByFiltersDTO, IProductData } from '../data';
import { IProduct } from '../entities';

@injectable()
class ProductFindByFiltersUseCase
  implements IUseCase<IFindByFiltersDTO, Array<IProduct>>
{
  constructor(
    @inject('ProductDataProvider')
    private productDataProvider: IProductData
  ) {}

  async execute(
    requestDTO: IFindByFiltersDTO
  ): Promise<Array<IProduct>> {
    return this.productDataProvider.findByFilters(requestDTO);
  }
}

export { ProductFindByFiltersUseCase };
