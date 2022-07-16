import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';
import IPodcastData from '../data';

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
