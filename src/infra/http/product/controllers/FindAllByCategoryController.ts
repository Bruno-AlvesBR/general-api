import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { FindAllByCategoryUseCase } from '../../../../domain/product/useCases/FindAllByCategoryUseCase';
import IController from '../../../../core/Controller';

class FindAllByCategoryController
  implements IController<Request, Response>
{
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<IProduct>>> {
    const findAllByCategoryUseCase = container.resolve(
      FindAllByCategoryUseCase
    );
    const { category } = request.params;

    try {
      const products = await findAllByCategoryUseCase.execute(
        category
      );

      return response.json(products);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { FindAllByCategoryController };
