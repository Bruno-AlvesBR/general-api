import { IVideoBody, IVideoProps } from '@domain/videos/entities';
import VideoCreateUseCase from '../../../../domain/videos/useCases/VideoCreateUseCase';
import IPresentation from 'core/Presentation';
import { container, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

@injectable()
export default class VideoCreatePresentation
  implements IPresentation<IVideoBody, IVideoProps>
{
  public async handle(props: IVideoBody) {
    const videoCreateUseCase = container.resolve(VideoCreateUseCase);

    const videoObject = {
      id: uuid(),
      title: props?.title,
      description: props?.description,
      duration: props?.duration,
      rating: props?.rating,
      file: {
        fileUrl: props?.fileUrl,
        fileType: props?.fileType,
        fileImage: props?.fileImage,
      },
    };

    const createVideo = await videoCreateUseCase.execute(videoObject);

    return createVideo;
  }
}
