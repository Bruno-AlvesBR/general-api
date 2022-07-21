import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IProductData from '../data';
import { IFoodProps } from '../entities/IFoodEntity';

@injectable()
export default class ProductFindBySlugUseCase
    implements IUseCase<any, IFoodProps>
{
    constructor(
        @inject('ProductDataProvider')
        private productDataProvider: IProductData
    ) {}

    public async execute(requestDTO?: any): Promise<IFoodProps> {
        return this.productDataProvider.findBySlug(requestDTO);
    }
}
