import IPodcastData from '@domain/podcast/data';
import {
  IPodcastBody,
  IPodcastProps,
} from '@domain/podcast/entities';
import { Podcast } from '../../../database/models/podcasts';

export default class PodcastDataProvider implements IPodcastData {
  public async register(props: IPodcastBody): Promise<IPodcastProps> {
    const newPodcast = new Podcast<IPodcastProps>(props);

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
    try {
      const findAllPodcasts = await Podcast.find<IPodcastProps>();

      return findAllPodcasts;
    } catch (err) {
      throw new Error('Cannot find all podcasts into database');
    }
  }

  public async findById(id: string): Promise<IPodcastProps> {
    const findPodcast = await Podcast.findOne<IPodcastProps>({
      _id: id,
    });

    if (!findPodcast) {
      throw new Error('Cannot find podcast by id');
    }

    return findPodcast;
  }

  public async update(data: IPodcastBody): Promise<IPodcastProps> {
    const updatePodcast =
      await Podcast.findOneAndUpdate<IPodcastProps>(
        { id: data?.id },
        data
      );

    if (!updatePodcast) {
      throw new Error('Unexpected error on update this podcast');
    }

    return updatePodcast;
  }

  public async remove(id: string): Promise<IPodcastProps | null> {
    const deletePodcast = Podcast.findOneAndDelete<IPodcastProps>({
      _id: id,
    });

    if (!deletePodcast) {
      throw new Error('Unexpected error to delete this podcast');
    }

    return deletePodcast ?? {};
  }
}
