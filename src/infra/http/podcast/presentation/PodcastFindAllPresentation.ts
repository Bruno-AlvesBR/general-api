import { IPodcastProps } from '../../../../domain/podcast/entities';
import PodcastFindAllUsecase from '../../../../domain/podcast/useCase/PodcastFindAllUseCase';
import { redis } from '../../../../configs/redis';
import IPresentation from '../../../../core/Presentation';
import { container, injectable } from 'tsyringe';

@injectable()
export class PodcastFindAllPresentation
  implements IPresentation<void, IPodcastProps[]>
{
  async handle(): Promise<IPodcastProps[]> {
    const podcastFindAllUseCase = container.resolve(
      PodcastFindAllUsecase
    );

    const syncCache = await redis.get('podcast-all');
    if (syncCache) return syncCache;

    const findAllPodcasts = await podcastFindAllUseCase.execute();

    await redis.set('podcast-all', JSON.stringify(findAllPodcasts));

    return findAllPodcasts;
  }
}
