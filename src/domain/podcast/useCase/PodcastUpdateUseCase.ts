import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IPodcastData from '../data';
import { IPodcastBody, IPodcastProps } from '../entities';

@injectable()
export default class PodcastUpdateUseCase
  implements IUseCase<IPodcastBody, IPodcastProps>
{
  constructor(
    @inject('PodcastDataProvider')
    private podcastDataProvider: IPodcastData
  ) {}

  public async execute(requestDTO: any): Promise<IPodcastProps> {
    return this.podcastDataProvider.update(requestDTO);
  }
}
