import { container, injectable } from 'tsyringe';

import { IVideoProps, IVideoUpdate } from '@domain/videos/entities';
import VideoUpdateUseCase from '../../../../domain/videos/useCases/VideoUpdateUseCase';
import IPresentation from 'core/Presentation';

@injectable()
export default class VideoUpdatePresentation
  implements IPresentation<any, IVideoProps>
{
  public async handle({ id, data }: IVideoUpdate) {
    const videoUpdateUseCase = container.resolve(VideoUpdateUseCase);

    const videoObject: IVideoProps = {
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
    };

    const updateVideo = await videoUpdateUseCase.execute({
      id,
      videoObject,
    });

    return updateVideo;
  }
}
