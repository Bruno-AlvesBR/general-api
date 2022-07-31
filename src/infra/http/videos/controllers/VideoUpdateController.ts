import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IVideoBody, IVideoProps } from '@domain/videos/entities';
import IController from 'core/Controller';
import VideoUpdatePresentation from '../presentation/VideoUpdatePresentation';

export default class VideoUpdateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps>> {
    const { id } = request.params;
    const { ...data }: IVideoBody = request.body;

    const videoUpdatePresentation = container.resolve(
      VideoUpdatePresentation
    );

    try {
      const updateVideo = await videoUpdatePresentation.handle({
        id,
        ...data,
      });

      if (!updateVideo) {
        return response
          .status(400)
          .json({ message: 'Cannot update this video' });
      }

      return response.status(200).json(updateVideo);
    } catch (err) {
      return response.status(403).json({ message: err });
    }
  }
}
