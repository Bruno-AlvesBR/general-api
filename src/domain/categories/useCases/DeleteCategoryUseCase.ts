import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import { ICategoryData } from '../data';

@injectable()
class DeleteCategoryUseCase implements IUseCase<string, void> {
  constructor(
    @inject('CategoryProvider')
    private categoryProvider: ICategoryData
  ) {}

  async execute(requestDTO: string): Promise<void> {
    return this.categoryProvider.deleteCategory(requestDTO);
  }
}

export { DeleteCategoryUseCase };
