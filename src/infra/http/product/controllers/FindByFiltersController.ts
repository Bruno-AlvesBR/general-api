import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct, IProductCard } from '@domain/product/entities';
import { ProductFindByFiltersUseCase } from '../../../../domain/product/useCases/ProductFindByFiltersUseCase';
import IController from '../../../../core/Controller';
import { IFiltersDTO } from '@domain/product/data';

class FindByFiltersController
  implements IController<Request, Response>
{
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<IProductCard>>> {
    const productFindByFiltersUseCase = container.resolve(
      ProductFindByFiltersUseCase
    );
    const props = request.body as IFiltersDTO;
    const { limit, offset } = request.query;

    try {
      const products = await productFindByFiltersUseCase.execute({
        limit: String(limit),
        offset: String(offset),
        ...props,
      });

      return response.json(products);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { FindByFiltersController };
