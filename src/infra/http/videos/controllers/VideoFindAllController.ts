import { IVideoProps } from '@domain/videos/entities';
import VideoFindAllUseCase from '../../../../domain/videos/useCases/VideoFindAllUseCase';
import IController from 'core/Controller';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class VideoFindAllController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps[]>> {
    const videoFindAllUseCase = container.resolve(
      VideoFindAllUseCase
    );

    try {
      const findAllVideos = await videoFindAllUseCase.execute();

      if (!findAllVideos) {
        return response
          .status(400)
          .json({ message: 'Cannot find all videos' });
      }

      return response.status(200).json(findAllVideos);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
