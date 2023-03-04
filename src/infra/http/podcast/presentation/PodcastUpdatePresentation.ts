import { container, injectable } from 'tsyringe';

import {
  IPodcastBody,
  IPodcastProps,
} from '@domain/podcast/entities';
import PodcastUpdateUseCase from '../../../../domain/podcast/useCase/PodcastUpdateUseCase';
import IPresentation from 'core/Presentation';

@injectable()
export default class PodcastUpdatePresentation
  implements IPresentation<IPodcastBody, IPodcastProps>
{
  public async handle(props: IPodcastBody) {
    const podcastUpdateUseCase = container.resolve(
      PodcastUpdateUseCase
    );

    const updatePodcast = await podcastUpdateUseCase.execute({
      id: props?.id,
      title: props?.title,
      members: props?.members,
      thumbnail: props?.thumbnail,
      description: props?.description,
      file: {
        url: props?.fileUrl,
        type: props?.fileType,
        duration: props?.fileDuration,
      },
    });

    return updatePodcast;
  }
}
