import { container } from 'tsyringe';

import IPodcastData from '@domain/podcast/data';
import { IProductData } from '@domain/product/data';
import IUserData from '@domain/user/data';
import PodcastDataProvider from './podcasts';
import ProductDataProvider from './products';
import UserDataProvider from './user';
import VideoDataProvider from './videos';
import IVideoData from '@domain/videos/data';
import { CartProvider } from './cart';
import { ICartData } from '@domain/chart/data';
import FakerVideoProvider from './fakes/FakerVideoProvider';
import { IBannerData } from '@domain/banner/data';
import { BannerProvider } from './banner';
import { ICategoryData } from '@domain/categories/data';
import { CategoryProvider } from './category';

container.registerSingleton<ICategoryData>(
  'CategoryProvider',
  CategoryProvider
);

container.registerSingleton<IPodcastData>(
  'PodcastDataProvider',
  PodcastDataProvider
);

container.registerSingleton<IProductData>(
  'ProductDataProvider',
  ProductDataProvider
);

container.registerSingleton<IUserData>(
  'UserDataProvider',
  UserDataProvider
);

container.registerSingleton<IVideoData>(
  'VideoDataProvider',
  process.env.NODE_ENV !== 'test'
    ? VideoDataProvider
    : FakerVideoProvider
);

container.registerSingleton<ICartData>(
  'CartDataProvider',
  CartProvider
);

container.registerSingleton<IBannerData>(
  'BannerDataProvider',
  BannerProvider
);
