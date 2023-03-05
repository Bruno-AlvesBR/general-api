import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import { IBanner } from '../entities';
import { IBannerData, IParamsDTO } from '../data';

@injectable()
class FindAllBannersUseCase
  implements IUseCase<IParamsDTO, Array<IBanner>>
{
  constructor(
    @inject('BannerDataProvider')
    private bannerProvider: IBannerData
  ) {}

  async execute(requestDTO: IParamsDTO): Promise<Array<IBanner>> {
    return this.bannerProvider.findAll(requestDTO);
  }
}

export { FindAllBannersUseCase };
