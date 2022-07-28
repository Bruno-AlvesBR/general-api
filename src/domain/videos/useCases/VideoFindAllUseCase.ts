import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IVideoData from '../data';
import { IVideoProps } from '../entities';

@injectable()
export default class VideoFindAllUseCase
  implements IUseCase<any, IVideoProps[]>
{
  constructor(
    @inject('VideoDataProvider')
    private videoDataProvider: IVideoData
  ) {}

  public async execute(requestDTO?: any): Promise<IVideoProps[]> {
    return this.videoDataProvider.findAll();
  }
}
