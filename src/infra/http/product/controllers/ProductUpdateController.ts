import { Request, Response } from 'express';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import { container } from 'tsyringe';
import IController from 'core/Controller';
import ProductUpdateUseCase from '../../../../domain/product/useCases/ProductUpdateUseCase';

export default class ProductUpdateController
    implements IController<Request, Response>
{
    public async index(
        request: Request,
        response: Response
    ): Promise<Response<IFoodProps>> {
        const { id } = request.params;
        const { ...data } = request.body;
        const productUpdateUseCase = container.resolve(
            ProductUpdateUseCase
        );

        try {
            const updateFood = await productUpdateUseCase.execute({
                id,
                data,
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
