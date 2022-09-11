import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import IChartData from '../data';
import { IChartProps } from '../entities';

@injectable()
export default class ChartNewUseCase
  implements IUseCase<string, IChartProps>
{
  constructor(
    @inject('ChartDataProvider')
    private chartDataProvider: IChartData
  ) {}

  public async execute(
    requestDTO: string
  ): Promise<IChartProps> {
    return this.chartDataProvider.newChart(requestDTO);
  }
}
