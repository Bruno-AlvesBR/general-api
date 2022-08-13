import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IPodcastProps } from '@domain/podcast/entities';
import IController from 'core/Controller';
import PodcastUpdatePresentation from '../presentation/PodcastUpdatePresentation';

export default class PodcastUpdateController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { id } = request.params;
    const { ...data } = request.body;
    const podcastUpdatePresentation = container.resolve(
      PodcastUpdatePresentation
    );

    try {
      const updatePodcast = await podcastUpdatePresentation.handle({
        id,
        ...data,
      });

      if (!updatePodcast) {
        return response
          .status(403)
          .json({ message: 'Cannot update this podcast' });
      }

      return response.status(200).json(updatePodcast);
    } catch (err) {
      return response.status(403).json({ err });
    }
  }
}
