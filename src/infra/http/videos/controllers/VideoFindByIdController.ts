import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IVideoProps } from '@domain/videos/entities';
import VideoFindByIdUseCase from '../../../../domain/videos/useCases/VideoFindByIdUseCase';
import IController from 'core/Controller';

export default class VideoFindByIdController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps>> {
    const { id } = request.params;
    const videoFindByIdUseCase = container.resolve(
      VideoFindByIdUseCase
    );

    try {
      const findVideoById = await videoFindByIdUseCase.execute(id);

      if (!findVideoById) {
        return response
          .status(400)
          .json({ message: 'Cannot find video by id' });
      }

      return response.status(200).json(findVideoById);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
