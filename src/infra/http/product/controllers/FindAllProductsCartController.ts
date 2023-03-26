import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { CartFindAllProductsUseCase } from '../../../../domain/chart/useCases/CartFindAllProductsUseCase';

class FindAllProductsCartController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<IProduct>>> {
    const { userId } = request.params;
    const findAllProductsCartUseCase = container.resolve(
      CartFindAllProductsUseCase
    );

    const products = await findAllProductsCartUseCase.execute(userId);

    return response.json(products);
  }
}

export { FindAllProductsCartController };
