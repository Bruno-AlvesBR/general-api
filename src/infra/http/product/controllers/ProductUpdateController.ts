import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '../../../../domain/product/entities';
import IController from '../../../../core/Controller';
import ProductUpdatePresentation from '../presentation/ProductUpdatePresentation';

export default class ProductUpdateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IProduct>> {
    const { id } = request.params;
    const { ...data } = request.body;
    const productUpdatePresentation = container.resolve(
      ProductUpdatePresentation
    );

    try {
      const updateProduct = await productUpdatePresentation.handle({
        id,
        ...data,
      });

      if (!updateProduct) {
        return response
          .status(403)
          .json('An error ocurred on update product!');
      }

      return response.status(200).json(updateProduct);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
