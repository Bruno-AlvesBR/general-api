import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IController from '../../../../core/Controller';
import { IPodcastProps } from '@domain/podcast/entities';
import { PodcastFindAllPresentation } from '../presentation/PodcastFindAllPresentation';

export default class PodcastFindAllController
  implements IController<Request, Response>
{
  public async index(
    _: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const podcastFindAllPresentation = container.resolve(
      PodcastFindAllPresentation
    );

    try {
      const findAllPodcasts =
        await podcastFindAllPresentation.handle();

      return response.status(200).json(findAllPodcasts);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
