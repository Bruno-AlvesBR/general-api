import { IChartProps } from '../entities';

interface IChartData {
  newChart(userId?: string): Promise<IChartProps>;
  addChart({ userId, productId }: IChartProps): Promise<IChartProps>;
  findAll(userId?: string): Promise<[]>;
}

export default IChartData;
