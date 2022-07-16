import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PodcastFindAllUsecase from '@domain/podcast/useCase/PodcastFindAllUseCase';
import IController from 'core/Controller';

export default class PodcastFindAllController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const podcastFindAllUseCase = container.resolve(
      PodcastFindAllUsecase
    );

    try {
      const findAllPodcasts = await podcastFindAllUseCase.execute();

      if (!findAllPodcasts) {
        return response.status(400).json('Cannot find all podcasts');
      }

      return response.status(200).json(findAllPodcasts);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
