import IPodcastData from '@domain/podcast/data';
import IProductData from '@domain/product/data';
import { container } from 'tsyringe';
import PodcastDataProvider from './podcasts';
import ProductDataProvider from './products';

container.registerSingleton<IPodcastData>(
  'PodcastDataProvider',
  PodcastDataProvider
);

container.registerSingleton<IProductData>(
  'ProductDataProvider',
  ProductDataProvider
);
