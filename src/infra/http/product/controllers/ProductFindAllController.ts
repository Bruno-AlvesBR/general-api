import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IProduct } from '../../../../domain/product/entities';
import IController from 'core/Controller';
import ProductFindAllUseCase from '../../../../domain/product/useCases/ProductFindAllUseCase';

export default class ProductFindAllController
  implements IController<Request, Response>
{
  public async index(
    _: Request,
    response: Response
  ): Promise<Response<IProduct[]>> {
    const productFindAllUseCase = container.resolve(
      ProductFindAllUseCase
    );

    if (!productFindAllUseCase) {
      return response
        .status(403)
        .json('Unexpected error to search all products!');
    }

    const productsFindAll = await productFindAllUseCase.execute();

    try {
      return response.status(200).json(productsFindAll);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
