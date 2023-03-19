import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICart } from '@domain/chart/entities';
import { CartRemoveProductUseCase } from '../../../../domain/chart/useCases/CartRemoveProductUseCase';

class CartRemoveProductController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<ICart>> {
    const { id } = request.params;
    const { productsId } = request.body;

    const cartRemoveProductUseCase = container.resolve(
      CartRemoveProductUseCase
    );

    try {
      const cart = await cartRemoveProductUseCase.execute({
        id,
        productsId,
      });

      return response.json(cart);
    } catch (error) {
      throw new Error(`Error on remove product into cart: ${error}`);
    }
  }
}

export { CartRemoveProductController };
