import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICategory } from '../entities';
import { ICategoryData, IUpdateCategoryDTO } from '../data';

@injectable()
class UpdateCategoryUseCase
  implements IUseCase<IUpdateCategoryDTO, ICategory>
{
  constructor(
    @inject('CategoryProvider')
    private categoryProvider: ICategoryData
  ) {}

  async execute(requestDTO: IUpdateCategoryDTO): Promise<ICategory> {
    return this.categoryProvider.updateCategory(requestDTO);
  }
}

export { UpdateCategoryUseCase };
