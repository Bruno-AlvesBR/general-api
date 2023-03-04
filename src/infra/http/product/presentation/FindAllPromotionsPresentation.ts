import { container, injectable } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { FindAllPromotionsUseCase } from '../../../../domain/product/useCases/FindAllPromotionsUseCase';
import { redis } from '../../../../configs/redis';
import IPresentation from '../../../../core/Presentation';

@injectable()
class FindAllPromotionsPresentation
  implements IPresentation<void, Array<IProduct>>
{
  async handle(): Promise<Array<IProduct>> {
    const findAllPromotionsUseCase = container.resolve(
      FindAllPromotionsUseCase
    );

    try {
      const productsPromotionsCacheKey = 'products-promotions';
      const productsPromotionsCache = await redis.get(
        productsPromotionsCacheKey
      );

      if (productsPromotionsCache) return productsPromotionsCache;

      const products = await findAllPromotionsUseCase.execute();

      await redis.set(
        productsPromotionsCacheKey,
        JSON.stringify(products)
      );

      return products;
    } catch {
      return [];
    }
  }
}

export { FindAllPromotionsPresentation };
