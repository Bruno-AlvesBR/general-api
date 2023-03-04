import { container, injectable } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { FindAllReleasesUseCase } from '../../../../domain/product/useCases/FindAllReleasesUseCase';
import { redis } from '../../../../configs/redis';
import IPresentation from '../../../../core/Presentation';

@injectable()
class FindAllReleasesPresentation
  implements IPresentation<void, Array<IProduct>>
{
  async handle(): Promise<Array<IProduct>> {
    const findAllReleasesUseCase = container.resolve(
      FindAllReleasesUseCase
    );

    const productsReleasesCacheKey = 'products-releases';
    const productsReleasesCache = await redis.get(
      productsReleasesCacheKey
    );

    if (productsReleasesCache) return productsReleasesCache;

    const products = await findAllReleasesUseCase.execute();

    await redis.set(
      productsReleasesCacheKey,
      JSON.stringify(products)
    );

    return products;
  }
}

export { FindAllReleasesPresentation };
