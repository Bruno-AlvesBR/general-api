import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import IChartData from '../data';

@injectable()
export default class ChartFindAllProductsUseCase
  implements IUseCase<string, []>
{
  constructor(
    @inject('ChartDataProvider')
    private chartDataProvider: IChartData
  ) {}

  public async execute(requestDTO?: string): Promise<[]> {
    return this.chartDataProvider.findAll(requestDTO);
  }
}
