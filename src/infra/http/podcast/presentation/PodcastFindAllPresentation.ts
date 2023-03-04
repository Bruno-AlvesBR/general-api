import { container, injectable } from 'tsyringe';

import { IPodcastProps } from '../../../../domain/podcast/entities';
import PodcastFindAllUsecase from '../../../../domain/podcast/useCase/PodcastFindAllUseCase';
import IPresentation from '../../../../core/Presentation';

@injectable()
export class PodcastFindAllPresentation
  implements IPresentation<void, IPodcastProps[]>
{
  async handle(): Promise<IPodcastProps[]> {
    const podcastFindAllUseCase = container.resolve(
      PodcastFindAllUsecase
    );

    const findAllPodcasts = await podcastFindAllUseCase.execute();

    return findAllPodcasts;
  }
}
