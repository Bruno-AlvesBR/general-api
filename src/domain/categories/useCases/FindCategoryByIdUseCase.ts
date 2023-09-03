import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICategory } from '../entities';
import { ICategoryData } from '../data';

@injectable()
class FindCategoryByIdUseCase implements IUseCase<string, ICategory> {
  constructor(
    @inject('CategoryProvider')
    private categoryProvider: ICategoryData
  ) {}

  async execute(requestDTO: string): Promise<ICategory> {
    return this.categoryProvider.findCategoryById(requestDTO);
  }
}

export { FindCategoryByIdUseCase };
