import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import { container } from 'tsyringe';
import ProductCreateUseCase from '../../../../domain/product/useCases/ProductCreateUseCase';
import IController from 'core/Controller';

export default class ProductCreateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { ...props } = request.body;
    const foodCreateUseCase = container.resolve(ProductCreateUseCase);

    try {
      const createProduct = await foodCreateUseCase.execute({
        ...props,
        id: uuid(),
      });

      return response.status(201).json(createProduct);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
