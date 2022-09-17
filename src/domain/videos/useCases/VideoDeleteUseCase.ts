import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';

import IVideoData from '../data';
import { IVideoProps } from '../entities';

@injectable()
export default class VideoDeleteUseCase
  implements IUseCase<any, IVideoProps>
{
  constructor(
    @inject('VideoDataProvider')
    private videoDataProvider: IVideoData
  ) {}

  public async execute(requestDTO?: any): Promise<IVideoProps> {
    return this.videoDataProvider.delete(requestDTO);
  }
}
