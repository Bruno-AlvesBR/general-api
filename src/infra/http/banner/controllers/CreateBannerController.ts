import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IBanner } from '@domain/banner/entities';
import IController from 'core/Controller';
import { CreateBannerUseCase } from '../../../../domain/banner/useCases/CreateBannerUseCase';

class CreateBannerController
  implements IController<Request, Response>
{
  async index(
    request: Request,
    response: Response
  ): Promise<Response<IBanner>> {
    const data = request.body;
    const createBannerUseCase = container.resolve(
      CreateBannerUseCase
    );

    try {
      const banner = await createBannerUseCase.execute(data);

      return response.status(201).json(banner);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { CreateBannerController };
