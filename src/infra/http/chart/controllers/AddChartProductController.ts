import IController from 'core/Controller';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

import Chart from '../../../../database/models/chart';
import { IChartProps } from '@domain/chart/entities';
import ChartAddProductUseCase from '../../../../domain/chart/useCases/ChartAddProductUseCase';

export default class AddChartProductController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IChartProps>> {
    const { _id, productId } = request.body;
    const chartAddProductUseCase = container.resolve(
      ChartAddProductUseCase
    );

    try {
      const hasUserChart = await Chart?.findOne({ userId: _id });

      if (hasUserChart) {
        const addedProductIntoChart =
          await chartAddProductUseCase.execute({
            userId: _id,
            productId,
          });

        if (!addedProductIntoChart) {
          return response.status(403).json({
            message: 'Unexpected error on save product into chart',
          });
        }

        return response.status(201).json(addedProductIntoChart);
      }

      return response
        .status(403)
        .json({ message: 'No user chart founded' });
    } catch (err) {
      return response.status(403).json({ message: err });
    }
  }
}
