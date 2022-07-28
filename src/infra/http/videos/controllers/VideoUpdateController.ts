import { IVideoProps } from '@domain/videos/entities';
import IController from 'core/Controller';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { container } from 'tsyringe';
import VideoUpdatePresentation from '../presentation/VideoUpdatePresentation';

export default class VideoUpdateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IVideoProps>> {
    const { id } = request.params;
    const { ...data } = request.body;

    const videoUpdatePresentation = container.resolve(
      VideoUpdatePresentation
    );

    try {
      const updateVideo = await videoUpdatePresentation.handle({
        id,
        data,
      });

      if (!updateVideo) {
        return response
          .status(400)
          .json({ message: 'Cannot update this video' });
      }

      return response.status(200).json(updateVideo);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
