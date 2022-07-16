import IPodcastData from '@domain/podcast/data';
import { v4 as uuid } from 'uuid';
import { Podcast } from '../../../database/models/podcasts';

export default class PodcastDataProvider implements IPodcastData {
  public async register({ ...props }: IPodcastProps) {
    const newPodcast = new Podcast({
      id: uuid(),
      title: props?.title,
      members: props?.members,
      thumbnail: props?.thumbnail,
      description: props?.description,
      file: {
        url: props?.file?.url,
        type: props?.file?.type,
        duration: props?.file?.duration,
      },
    });

    if (!newPodcast) {
      throw new Error('An error ocurred on create a new podcast');
    }

    const savePodcast = await newPodcast.save();

    if (!savePodcast) {
      throw new Error('cannot save this podcast on schema');
    }

    return savePodcast;
  }

  public async findAll(): Promise<IPodcastProps[]> {
    const findAllPodcasts = await Podcast.find();

    if (!findAllPodcasts) {
      throw new Error('An error ocurred on try find all podcasts');
    }

    return findAllPodcasts;
  }

  public async findById(id: string): Promise<IPodcastProps> {
    const findPodcast = await Podcast.findOne({ id });

    if (!findPodcast) {
      throw new Error('Cannot find podcast by id');
    }

    return findPodcast;
  }
}
