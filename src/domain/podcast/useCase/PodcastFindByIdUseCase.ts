import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IPodcastData from '../data';
import { IPodcastProps } from '../entities';

@injectable()
export default class PodcastFindByIdUseCase
  implements IUseCase<any, IPodcastProps>
{
  constructor(
    @inject('PodcastDataProvider')
    private podcastDataProvider: IPodcastData
  ) {}

  public async execute(requestDTO?: any): Promise<IPodcastProps> {
    return this.podcastDataProvider.findById(requestDTO);
  }
}
