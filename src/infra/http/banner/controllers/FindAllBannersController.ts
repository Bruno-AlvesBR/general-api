import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllBannersUseCase } from '../../../../domain/banner/useCases/FindAllBannersUseCase';
import { IBanner } from '@domain/banner/entities';

class FindAllBannersController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<Array<IBanner>>> {
    const { limit, offset } = request.query;
    const findAllBannersUseCase = container.resolve(
      FindAllBannersUseCase
    );

    try {
      const banners = await findAllBannersUseCase.execute({
        limit: Number(limit),
        offset: Number(offset),
      });

      return response.json(banners);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { FindAllBannersController };
