import { inject, injectable } from 'tsyringe';

import IUseCase from '../../../core/UseCase';
import { IBannerData } from '../data';
import { IBanner, IBannerDTO } from '../entities';

@injectable()
class CreateBannerUseCase implements IUseCase<IBannerDTO, IBanner> {
  constructor(
    @inject('BannerDataProvider')
    private bannerProvider: IBannerData
  ) {}

  async execute(requestDTO: IBannerDTO): Promise<IBanner> {
    return this.bannerProvider.create(requestDTO);
  }
}

export { CreateBannerUseCase };
