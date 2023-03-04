import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import IController from '../../../../core/Controller';
import { FindAllPromotionsPresentation } from '../presentation/FindAllPromotionsPresentation';

class FindAllPromotionsController
  implements IController<Request, Response>
{
  async index(
    _: Request,
    response: Response
  ): Promise<Response<Array<IProduct>>> {
    const findAllPromotionsPresentation = container.resolve(
      FindAllPromotionsPresentation
    );

    try {
      const products = await findAllPromotionsPresentation.handle();

      return response.json(products);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { FindAllPromotionsController };
