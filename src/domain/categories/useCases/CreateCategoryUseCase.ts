import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICategory } from '../entities';
import { ICategoryData } from '../data';

@injectable()
class CreateCategoryUseCase
  implements IUseCase<ICategory, ICategory>
{
  constructor(
    @inject('CategoryProvider')
    private categoryProvider: ICategoryData
  ) {}

  async execute(requestDTO: ICategory): Promise<ICategory> {
    return this.categoryProvider.createCategory(requestDTO);
  }
}

export { CreateCategoryUseCase };
