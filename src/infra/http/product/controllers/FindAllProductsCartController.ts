import { IProduct } from '@domain/product/entities';
import { FindAllProductsCartUseCase } from '../../../../domain/product/useCases/FindAllProductsCartUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class FindAllProductsCartController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<IProduct>>> {
    const { userId } = request.params;
    const findAllProductsCartUseCase = container.resolve(
      FindAllProductsCartUseCase
    );

    const products = await findAllProductsCartUseCase.execute(userId);

    return response.json(products);
  }
}

export { FindAllProductsCartController };
