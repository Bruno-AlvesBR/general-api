import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import IController from 'core/Controller';
import ProductDeleteUseCase from '../../../../domain/product/useCases/ProductDeleteUseCase';

export default class ProductDeleteController
    implements IController<Request, Response>
{
    public async index(
        request: Request,
        response: Response
    ): Promise<Response<IFoodProps>> {
        const { id } = request.params;
        const productDeleteUseCase = container.resolve(
            ProductDeleteUseCase
        );

        try {
            const findAndDelete = await productDeleteUseCase.execute(
                id
            );

            console.log(findAndDelete);

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
            return response.status(404).json(err);
        }
    }
}
