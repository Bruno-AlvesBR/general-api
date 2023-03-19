import IController from 'core/Controller';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CartFindAllProductsUseCase } from '../../../../domain/chart/useCases/CartFindAllProductsUseCase';
import { ICart } from '@domain/chart/entities';

class FindAllProductsCartController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<ICart>>> {
    const { id } = request.params;
    const cartFindAllUseCase = container.resolve(
      CartFindAllProductsUseCase
    );

    try {
      const cartProducts = await cartFindAllUseCase.execute(id);

      return response.status(200).json(cartProducts);
    } catch (err) {
      return response.status(500).json({ message: err });
    }
  }
}

export { FindAllProductsCartController };
