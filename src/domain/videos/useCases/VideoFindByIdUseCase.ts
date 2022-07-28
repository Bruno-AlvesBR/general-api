import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IVideoData from '../data';
import { IVideoProps } from '../entities';

@injectable()
export default class VideoFindByIdUseCase
  implements IUseCase<any, IVideoProps>
{
  constructor(
    @inject('VideoDataProvider')
    private videoDataProvider: IVideoData
  ) {}

  public async execute(requestDTO?: any): Promise<IVideoProps> {
    return this.videoDataProvider.findById(requestDTO);
  }
}
