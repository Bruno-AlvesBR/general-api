import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IController from 'core/Controller';
import {
  IPodcastBody,
  IPodcastProps,
} from '@domain/podcast/entities';
import PodcastCreatePresentation from '../presentation/PodcastCreatePresentation';

export default class PodcastRegisterController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { ...props }: IPodcastBody = request.body;
    const podcastCreatePresentation = container.resolve(
      PodcastCreatePresentation
    );

    try {
      const createPodcast = await podcastCreatePresentation.handle(
        props
      );

      if (!createPodcast) {
        return response
          .status(400)
          .json('Cannot create a new podcast');
      }

      return response.status(201).json(createPodcast);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
