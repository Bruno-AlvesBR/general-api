import PodcastRegisterUseCase from '../../../../domain/podcast/useCase/PodcastRegisterUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import IController from 'core/Controller';

export default class PodcastRegisterController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { ...props } = request.body;
    const podcastRegisterUseCase = container.resolve(
      PodcastRegisterUseCase
    );

    try {
      const createPodcast = await podcastRegisterUseCase.execute(
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
