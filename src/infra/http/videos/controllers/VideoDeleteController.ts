import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IVideoProps } from '@domain/videos/entities';
import VideoDeleteUseCase from '../../../../domain/videos/useCases/VideoDeleteUseCase';
import IController from 'core/Controller';

export default class VideoDeleteController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps>> {
    const { id } = request.params;
    const videoDeleteUseCase = container.resolve(VideoDeleteUseCase);

    try {
      const deleteVideo = await videoDeleteUseCase.execute(id);

      if (!deleteVideo) {
        return response
          .status(400)
          .json({ message: 'User cannot delete this video' });
      }

      return response.status(200).json(deleteVideo);
    } catch (err) {
      return response
        .status(403)
        .json({ message: 'Cannot find this video' });
    }
  }
}
