import IChartData from '@domain/chart/data';
import { IChartProps } from '@domain/chart/entities';
import Chart from '../../../database/models/chart';

export default class ChartDataProvider implements IChartData {
  public async findAll(userId?: string): Promise<[]> {
    const findAllChartProducts = await Chart.findOne<IChartProps>({
      userId,
    });
    const productsId: any = [];

    findAllChartProducts?.productId?.forEach((content) => {
      productsId.push(content);
    });

    if (!productsId?.length) {
      throw new Error('Cannot find products into chart');
    }

    return productsId ?? [];
  }

  public async newChart(userId: string): Promise<IChartProps> {
    const newChart = new Chart({ userId });

    if (!newChart) {
      throw new Error('Unexpected error on try create new chart');
    }

    const saveChart = await newChart.save();

    if (!saveChart) {
      throw new Error('Cannot save this chart on database');
    }

    return saveChart ?? {};
  }

  public async addChart({
    userId,
    productId,
  }: IChartProps): Promise<IChartProps> {
    const addNewProductToChart = await Chart.findOneAndUpdate(
      { userId },
      { productId }
    );

    if (!addNewProductToChart) {
      throw new Error('Unexpected error on add product into chart');
    }

    return addNewProductToChart ?? {};
  }
}
