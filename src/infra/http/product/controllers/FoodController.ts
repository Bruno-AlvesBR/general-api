import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import { FoodPresentation } from '../presentation/FoodPresentation';

export class FoodController {
  public async create(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { ...props } = request.body;

    const foodPresentation = new FoodPresentation();

    try {
      const createProduct = await foodPresentation.create({
        ...props,
        id: uuid(),
      });

      return response.status(201).json(createProduct);
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}
