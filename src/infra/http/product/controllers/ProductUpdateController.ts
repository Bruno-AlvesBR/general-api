import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import IController from '../../../../core/Controller';
import ProductUpdatePresentation from '../presentation/ProductUpdatePresentation';

export default class ProductUpdateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { id } = request.params;
    const { ...data } = request.body;
    const productUpdatePresentation = container.resolve(
      ProductUpdatePresentation
    );

    try {
      const updateFood = await productUpdatePresentation.handle({
        id,
        ...data,
      });


      if (!updateFood) {
        return response
          .status(403)
          .json('An error ocurred on update food!');
      }

      return response.status(200).json(updateFood);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
