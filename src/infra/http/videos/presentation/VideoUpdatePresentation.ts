import { container, injectable } from 'tsyringe';

import { IVideoBody } from '@domain/videos/entities';
import VideoUpdateUseCase from '../../../../domain/videos/useCases/VideoUpdateUseCase';
import IPresentation from 'core/Presentation';

@injectable()
export default class VideoUpdatePresentation
  implements IPresentation<IVideoBody>
{
  public async handle(data: IVideoBody) {
    const videoUpdateUseCase = container.resolve(VideoUpdateUseCase);

    const updateVideo = await videoUpdateUseCase.execute({
      id: data?.id,
      title: data?.title,
      description: data?.description,
      duration: data?.duration,
      rating: data?.rating,
      file: {
        url: data?.fileUrl,
        image: data?.fileImage,
        type: data?.fileType,
      },
    });

    return updateVideo;
  }
}
