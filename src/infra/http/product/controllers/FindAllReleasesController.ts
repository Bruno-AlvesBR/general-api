import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import IController from '../../../../core/Controller';
import { FindAllReleasesPresentation } from '../presentation/FindAllReleasesPresentation';

class FindAllReleasesController
  implements IController<Request, Response>
{
  async index(
    _: Request,
    response: Response
  ): Promise<Response<Array<IProduct>>> {
    const findAllReleasesPresentation = container.resolve(
      FindAllReleasesPresentation
    );

    try {
      const products = await findAllReleasesPresentation.handle();

      return response.json(products);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { FindAllReleasesController };
