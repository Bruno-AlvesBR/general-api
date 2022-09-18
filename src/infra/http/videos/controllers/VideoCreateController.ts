import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IVideoProps } from '@domain/videos/entities';
import IController from 'core/Controller';
import VideoCreatePresentation from '../presentation/VideoCreatePresentation';

export default class VideoCreateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps>> {
    const { ...data } = request.body;
    const videoCreatePresentation = container.resolve(
      VideoCreatePresentation
    );

    try {
      const createVideo = await videoCreatePresentation.handle(data);

      if (!createVideo) {
        return response
          .status(403)
          .json({ message: 'Error to create a new video' });
      }

      return response.status(201).json(createVideo);
    } catch (err) {
      return response.status(500).json(err);
    }
  }
}
