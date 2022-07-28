import { IVideoProps } from '@domain/videos/entities';
import VideoCreateUseCase from '../../../../domain/videos/useCases/VideoCreateUseCase';
import IPresentation from 'core/Presentation';
import { container, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

@injectable()
export default class VideoCreatePresentation
  implements IPresentation<IVideoProps, IVideoProps>
{
  public async handle(props: IVideoProps) {
    const videoCreateUseCase = container.resolve(VideoCreateUseCase);

    const videoObject = {
      id: uuid(),
      ...props,
    };

    const createVideo = await videoCreateUseCase.execute(videoObject);

    return createVideo;
  }
}
