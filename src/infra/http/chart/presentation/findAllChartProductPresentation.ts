import IPresentation from 'core/Presentation';
import { container, injectable } from 'tsyringe';

import { IChartProps } from '@domain/chart/entities';
import ChartFindAllProductsUseCase from '../../../../domain/chart/useCases/ChartFindAllProductsUseCase';
import { IFoodProps } from '@domain/product/entities/IFoodEntity';

@injectable()
export default class findAllChartProductPresentation
  implements IPresentation<IChartProps>
{
  public async handle({
    userId,
  }: IChartProps): Promise<IFoodProps[]> {
    const chartFindAllUseCase = container.resolve(
      ChartFindAllProductsUseCase
    );

    const productsIntoChart = await chartFindAllUseCase.execute(
      userId
    );

    return productsIntoChart ?? [];
  }
}
