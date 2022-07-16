import IUseCase from 'core/UseCase';
import { inject, injectable } from 'tsyringe';
import IPodcastData from '../data';

@injectable()
export default class PodcastRegisterUseCase
  implements IUseCase<any, IPodcastProps>
{
  constructor(
    @inject('PodcastDataprovider')
    private podcastDataProvider: IPodcastData
  ) {}

  public async execute(requestDTO?: any): Promise<IPodcastProps> {
    return this.podcastDataProvider.register(requestDTO);
  }
}
