import IPresentation from 'core/Presentation';
import { container, injectable } from 'tsyringe';

import { IChartProps } from '@domain/chart/entities';
import ChartFindAllProductsUseCase from '../../../../domain/chart/useCases/ChartFindAllProductsUseCase';
import { IProduct } from '@domain/product/entities';

@injectable()
export default class findAllChartProductPresentation
  implements IPresentation<IChartProps>
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
