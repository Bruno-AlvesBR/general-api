import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PodcastFindByIdUseCase from '../../../../domain/podcast/useCase/PodcastFindByIdUseCase';
import IController from 'core/Controller';

export default class PodcastFindByIdController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { id } = request.params;
    const podcastFindByIdUseCase = container.resolve(
      PodcastFindByIdUseCase
    );

    try {
      const findPodcast = await podcastFindByIdUseCase.execute(
        String(id)
      );

      if (!findPodcast) {
        return response
          .status(403)
          .json('Cannot finded podcast by id on database');
      }

      return response.status(200).json(findPodcast);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
