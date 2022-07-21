import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IFoodProps } from '../../../../domain/product/entities/IFoodEntity';
import IController from 'core/Controller';
import ProductFindBySlugUseCase from '../../../../domain/product/useCases/ProductFindBySlugUseCase';

export default class ProductFindBySlugController
    implements IController<Request, Response>
{
    public async index(
        request: Request,
        response: Response
    ): Promise<Response<IFoodProps>> {
        const { slug } = request.params;
        const productFindBySlugUseCase = container.resolve(
            ProductFindBySlugUseCase
        );

        try {
            const findProductBySlug =
                await productFindBySlugUseCase.execute(slug);

            if (!findProductBySlug) {
                return response
                    .status(403)
                    .json('An error ocurred on find a product');
            }

            return response.status(200).json(findProductBySlug);
        } catch (err) {
            return response.status(403).json(err);
        }
    }
}
