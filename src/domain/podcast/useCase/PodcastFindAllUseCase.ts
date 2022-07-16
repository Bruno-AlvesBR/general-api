import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';
import IPodcastData from '../data';

@injectable()
export default class PodcastFindAllUsecase
  implements IUseCase<any, IPodcastProps[]>
{
  constructor(
    @inject('PodcastDataProvider')
    private podcastDataProvider: IPodcastData
  ) {}

  public async execute(): Promise<IPodcastProps[]> {
    return this.podcastDataProvider.findAll();
  }
}
