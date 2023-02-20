import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '../../../../domain/product/entities';
import IController from 'core/Controller';
import ProductCreatePresentation from '../presentation/ProductCreatePresentation';

export default class ProductCreateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IProduct>> {
    const { ...props } = request.body;
    const productCreatePresentation = container.resolve(
      ProductCreatePresentation
    );

    try {
      const createProduct = await productCreatePresentation.handle({
        ...props,
      });

      return response.status(201).json(createProduct);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
