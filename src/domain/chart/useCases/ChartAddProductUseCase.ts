import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import IChartData from '../data';
import { IChartProps } from '../entities';

@injectable()
export default class ChartAddProductUseCase
  implements IUseCase<IChartProps, IChartProps>
{
  constructor(
    @inject('ChartDataProvider')
    private chartDataProvider: IChartData
  ) {}

  public async execute(
    requestDTO: IChartProps
  ): Promise<IChartProps> {
    return this.chartDataProvider.addChart(requestDTO);
  }
}
