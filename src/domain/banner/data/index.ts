import { IBanner, IBannerDTO } from '../entities';

export interface IParamsDTO {
  limit: number;
  offset: number;
}

abstract class IBannerData {
  abstract create(params: IBannerDTO): Promise<IBanner>;

  abstract findAll(params: IParamsDTO): Promise<Array<IBanner>>;
}

export { IBannerData };
