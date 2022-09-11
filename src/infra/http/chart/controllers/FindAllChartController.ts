import IController from 'core/Controller';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ChartFindAllProductsUseCase from '../../../../domain/chart/useCases/ChartFindAllProductsUseCase';

export default class FindAllChartController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<[]>> {
    const { _id } = request.body;
    const chartFindAllUseCase = container.resolve(
      ChartFindAllProductsUseCase
    );

    try {
      const findAllProducts = await chartFindAllUseCase.execute(_id);

      if (!findAllProducts) {
        return response
          .status(403)
          .json({ message: 'Cannot find all products on database' });
      }

      return response.status(200).json(findAllProducts);
    } catch (err) {
      return response.status(500).json({ message: err });
    }
  }
}
