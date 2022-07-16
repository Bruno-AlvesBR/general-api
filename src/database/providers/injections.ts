import IPodcastData from '@domain/podcast/data';
import { container } from 'tsyringe';
import PodcastDataProvider from './podcasts';

container.registerSingleton<IPodcastData>(
  'PodcastDataProvider',
  PodcastDataProvider
);
