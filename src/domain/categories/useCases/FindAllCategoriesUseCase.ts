import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICategoryData, IParamsDTO } from '../data';
import { ICategory } from '../entities';

@injectable()
class FindAllCategoriesUseCase
  implements IUseCase<IParamsDTO, Array<ICategory>>
{
  constructor(
    @inject('CategoryProvider')
    private categoryProvider: ICategoryData
  ) {}

  async execute(requestDTO: IParamsDTO): Promise<Array<ICategory>> {
    return this.categoryProvider.findAllCategories(requestDTO);
  }
}

export { FindAllCategoriesUseCase };
