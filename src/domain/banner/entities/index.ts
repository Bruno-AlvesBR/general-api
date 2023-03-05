export interface IBanner {
  id: string;
  url: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBannerDTO {
  _id?: string;
  url: string;
  slug: string;
  type: string;
}
