import { IBannerData, IParamsDTO } from '@domain/banner/data';
import { IBannerDTO, IBanner } from '@domain/banner/entities';
import { Banner } from '../../../database/models/banner';

class BannerProvider implements IBannerData {
  async findAll({
    limit,
    offset,
  }: IParamsDTO): Promise<Array<IBanner>> {
    try {
      const banners = await Banner.find().skip(offset).limit(limit);

      return banners;
    } catch (error) {
      console.error(`Cannot possible find all banners: ${error}`);
      return [];
    }
  }

  async create(params: IBannerDTO): Promise<IBanner> {
    try {
      delete params?._id;
      const banner = new Banner(params);

      const savedBanner = await banner.save();
      return savedBanner;
    } catch (error) {
      console.error(`Cannot possible save this banner: ${error}`);
      return {} as IBanner;
    }
  }
}

export { BannerProvider };
