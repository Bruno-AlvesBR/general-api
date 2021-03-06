import { container } from 'tsyringe';

import IPodcastData from '@domain/podcast/data';
import IProductData from '@domain/product/data';
import IUserData from '@domain/user/data';
import PodcastDataProvider from './podcasts';
import ProductDataProvider from './products';
import UserDataProvider from './user';
import VideoDataProvider from './videos';
import IVideoData from '@domain/videos/data';

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
  VideoDataProvider
);
