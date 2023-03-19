import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { ICart } from '@domain/chart/entities';
import { CartAddProductUseCase } from '../../../../domain/chart/useCases/CartAddProductUseCase';
import IController from 'core/Controller';

class AddProductToCartController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<ICart>> {
    const { productsId } = request.body;
    const { id } = request.params;

    const cartAddProductUseCase = container.resolve(
      CartAddProductUseCase
    );

    try {
      const cart = await cartAddProductUseCase.execute({
        id,
        productsId,
      });

      return response.status(201).json(cart);
    } catch (err) {
      return response.status(500).json({ message: err });
    }
  }
}

export { AddProductToCartController };
