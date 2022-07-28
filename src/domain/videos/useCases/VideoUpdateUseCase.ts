import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';
import IVideoData from '../data';
import { IVideoProps, IVideoUpdate } from '../entities';

@injectable()
export default class VideoUpdateUseCase
  implements IUseCase<any, IVideoProps>
{
  constructor(
    @inject('VideoDataProvider')
    private videoDataProvider: IVideoData
  ) {}

  public async execute(requestDTO?: any): Promise<IVideoProps> {
    console.log('test', requestDTO?.videoObject);
    return this.videoDataProvider.update(
      requestDTO?.id,
      requestDTO?.videoObject
    );
  }
}
