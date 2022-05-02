import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import { Food } from '../../../../providers/database/product/FoodSchema';
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
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const findAllFoods = await Food.find();

    if (!findAllFoods) {
      return response
        .status(400)
        .json('Unexpected error to search all products!');
    }

    return response.status(200).json(findAllFoods);
  }
}
