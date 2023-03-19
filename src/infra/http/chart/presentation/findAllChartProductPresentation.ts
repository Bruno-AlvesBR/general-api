import IPresentation from 'core/Presentation';
import { container, injectable } from 'tsyringe';

import { IChartProps } from '@domain/chart/entities';
import ChartFindAllProductsUseCase from '../../../../domain/chart/useCases/CartFindAllProductsUseCase';
import { IProduct } from '@domain/product/entities';

@injectable()
export default class findAllChartProductPresentation
  implements IPresentation<IChartProps, Array<IProduct>>
{
  public async handle({ userId }: IChartProps): Promise<IProduct[]> {
    const chartFindAllUseCase = container.resolve(
      ChartFindAllProductsUseCase
    );

    const productsIntoChart = await chartFindAllUseCase.execute(
      userId
    );

    return productsIntoChart ?? [];
  }
}
