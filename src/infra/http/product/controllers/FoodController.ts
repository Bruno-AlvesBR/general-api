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

  public async update(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { id } = request.params;
    const { ...data } = request.body;

    const foodPresentation = new FoodPresentation();

    try {
      const updateFood = await foodPresentation.udpate(
        id,
        data
      );

      if (!updateFood) {
        return response
          .status(403)
          .json('An error ocurred on update food!');
      }

      return response.status(200).json(updateFood);
    } catch (err) {
      return response.status(403).json(err);
    }
  }

  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const findAllFoods = await Food?.find();

    if (!findAllFoods) {
      return response
        .status(400)
        .json('Unexpected error to search all products!');
    }

    return response.status(200).json(findAllFoods);
  }

  public async findBySlug(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { slug } = request.params;

    const foodPresentation = new FoodPresentation();

    try {
      const findFoodBySlug =
        await foodPresentation.findBySlug(slug);

      if (!findFoodBySlug) {
        return response
          .status(403)
          .json('An error ocurred on find a product');
      }

      return response.status(200).json(findFoodBySlug);
    } catch (err) {
      return response.status(403).json(err);
    }
  }

  public async delete(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    const { id } = request.params;

    const foodPresentation = new FoodPresentation();

    try {
      const findAndDelete = await foodPresentation.delete(
        id
      );

      if (!findAndDelete) {
        return response
          .status(403)
          .json(
            'An error ocurred on find and delete this product'
          );
      }

      return response
        .status(200)
        .json({ message: 'Sucess, item has been deleted' });
    } catch (err) {
      return response.status(403).json(err);
    }
  }

  public async count(
    request: Request,
    response: Response
  ): Promise<Response<IFoodProps>> {
    try {
      const count = await Food?.find();

      if (!count) {
        response
          .status(403)
          .json('Cannot find items list count');
      }

      return response
        .status(200)
        .json({ count: count?.length });
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
