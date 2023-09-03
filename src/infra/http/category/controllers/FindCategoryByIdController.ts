import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICategory } from '../../../../domain/categories/entities';
import { FindCategoryByIdUseCase } from '../../../../domain/categories/useCases/FindCategoryByIdUseCase';

class FindCategoryByIdController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<ICategory>> {
    const findCategoryByIdUseCase = container.resolve(
      FindCategoryByIdUseCase
    );

    const { id } = request.params;

    try {
      const category = await findCategoryByIdUseCase.execute(id);

      return response.status(200).json(category);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { FindCategoryByIdController };
