import { injectable, container } from 'tsyringe';
import { v4 as uuid } from 'uuid';

import PodcastRegisterUseCase from '../../../../domain/podcast/useCase/PodcastRegisterUseCase';
import IPresentation from 'core/Presentation';
import { IPodcastBody } from '@domain/podcast/entities';

@injectable()
export default class PodcastCreatePresentation
  implements IPresentation<IPodcastBody>
{
  public async handle(props: IPodcastBody) {
    const podcastCreateUseCase = container.resolve(
      PodcastRegisterUseCase
    );

    const createPodcast = await podcastCreateUseCase.execute({
      id: uuid(),
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

    return createPodcast;
  }
}
