import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICategory } from '../../../../domain/categories/entities';
import { DeleteCategoryUseCase } from '../../../../domain/categories/useCases/DeleteCategoryUseCase';

class DeleteCategoryController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<void>> {
    const deleteCategoryUseCase = container.resolve(
      DeleteCategoryUseCase
    );

    const { id } = request.params;

    try {
      await deleteCategoryUseCase.execute(id);

      return response
        .status(200)
        .json({ message: `Success on delete the category: ${id}` });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { DeleteCategoryController };
