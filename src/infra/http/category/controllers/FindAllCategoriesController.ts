import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICategory } from '../../../../domain/categories/entities';
import { FindAllCategoriesUseCase } from '../../../../domain/categories/useCases/FindAllCategoriesUseCase';

class FindAllCategoriesController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<ICategory>>> {
    const findAllCategoriesUseCase = container.resolve(
      FindAllCategoriesUseCase
    );

    const { limit, offset } = request.query;

    try {
      const categories = await findAllCategoriesUseCase.execute({
        limit: Number(limit),
        offset: Number(offset),
      });

      return response.status(200).json(categories);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { FindAllCategoriesController };
