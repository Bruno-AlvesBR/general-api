import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICategory } from '../../../../domain/categories/entities';
import { UpdateCategoryUseCase } from '../../../../domain/categories/useCases/UpdateCategoryUseCase';

class UpdateCategoryController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<ICategory>> {
    const updateCategoryUseCase = container.resolve(
      UpdateCategoryUseCase
    );

    const { id } = request.params;
    const data = request.body;

    try {
      const category = await updateCategoryUseCase.execute({
        id,
        data,
      });

      return response.status(200).json(category);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { UpdateCategoryController };
