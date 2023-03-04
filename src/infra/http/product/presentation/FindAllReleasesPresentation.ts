import { container, injectable } from 'tsyringe';

import { IProduct } from '@domain/product/entities';
import { FindAllReleasesUseCase } from '../../../../domain/product/useCases/FindAllReleasesUseCase';
import IPresentation from '../../../../core/Presentation';

@injectable()
class FindAllReleasesPresentation
  implements IPresentation<void, Array<IProduct>>
{
  async handle(): Promise<Array<IProduct>> {
    const findAllReleasesUseCase = container.resolve(
      FindAllReleasesUseCase
    );

    const products = await findAllReleasesUseCase.execute();

    return products;
  }
}

export { FindAllReleasesPresentation };
