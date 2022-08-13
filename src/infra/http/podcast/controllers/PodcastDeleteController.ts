import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IPodcastProps } from '@domain/podcast/entities';
import PodcastDeleteUseCase from '../../../../domain/podcast/useCase/PodcastDeleteUseCase';
import IController from 'core/Controller';

export default class PodcastDeleteController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { id } = request.params;
    const podcastDeleteUseCase = container.resolve(
      PodcastDeleteUseCase
    );

    try {
      const deletePodcast = await podcastDeleteUseCase.execute(id);

      if (!deletePodcast) {
        return response
          .status(403)
          .json({ message: 'Cannot delete this podcast' });
      }

      return response.status(200).json();
    } catch (err) {
      return response.status(403).json({ err });
    }
  }
}
