import IController from 'core/Controller';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IChartProps } from '@domain/chart/entities';
import ChartNewUseCase from '../../../../domain/chart/useCases/ChartNewUseCase';

export default class NewChartController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IChartProps>> {
    const { _id } = request.body;
    const chartNewUseCase = container.resolve(ChartNewUseCase);

    try {
      const newChart = await chartNewUseCase.execute(_id);

      if (!newChart) {
        return response
          .status(403)
          .json({ message: 'Cannot create a new chart' });
      }

      return response.status(201).json(newChart);
    } catch (err) {
      return response.status(500).json({ message: err });
    }
  }
}
