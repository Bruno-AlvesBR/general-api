import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICategory } from '../../../../domain/categories/entities';
import { CreateCategoryUseCase } from '../../../../domain/categories/useCases/CreateCategoryUseCase';

class CreateCategoryController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<ICategory>> {
    const createCategoryUseCase = container.resolve(
      CreateCategoryUseCase
    );

    const props = request.body;

    try {
      const category = await createCategoryUseCase.execute(props);

      return response.status(201).json(category);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { CreateCategoryController };
