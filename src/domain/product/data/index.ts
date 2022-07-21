import { IFoodCreate, IFoodProps } from '../entities/IFoodEntity';

export default interface IProductData {
    create(props: IFoodCreate): Promise<IFoodProps>;
    update(id: string, data: IFoodCreate): Promise<IFoodProps>;
    findAll(): Promise<IFoodProps[]>;
    findBySlug(slug: string): Promise<IFoodProps>;
    delete(id: string): Promise<IFoodProps>;
}
