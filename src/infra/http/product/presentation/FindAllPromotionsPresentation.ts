import { container, injectable } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { FindAllPromotionsUseCase } from '../../../../domain/product/useCases/FindAllPromotionsUseCase';
import IPresentation from '../../../../core/Presentation';

@injectable()
class FindAllPromotionsPresentation
  implements IPresentation<void, Array<IProduct>>
{
  async handle(): Promise<Array<IProduct>> {
    const findAllPromotionsUseCase = container.resolve(
      FindAllPromotionsUseCase
    );

    const products = await findAllPromotionsUseCase.execute();

    return products;
  }
}

export { FindAllPromotionsPresentation };
