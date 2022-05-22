import { Podcast } from '../../../../providers/database/podcasts';

export class PodcastPresentation {
  public async register({ ...props }: IPodcastProps) {
    const newPodcast = new Podcast({
      id: props?.id,
      title: props?.title,
      description: props?.description,
      members: props?.members,
      thumbnail: props?.thumbnail,
      file: {
        url: props?.file?.url,
        type: props?.file?.type,
        duration: props?.file?.duration,
      },
    });

    if (!newPodcast) {
      throw new Error(
        'An error ocurred on create a new podcast'
      );
    }

    const savePodcast = await newPodcast.save();

    if (!savePodcast) {
      throw new Error('cannot save this podcast on schema');
    }

    return savePodcast;
  }

  public async findAll() {
    const findAllPodcasts = await Podcast.find();

    if (!findAllPodcasts) {
      throw new Error(
        'An error ocurred on try find all podcasts'
      );
    }

    return findAllPodcasts;
  }

  public async findById({ id }: IPodcastProps) {
    const findPodcast = await Podcast.findOne({ id });

    console.log('findPodcast', findPodcast);

    if (!findPodcast) {
      throw new Error('Cannot find podcast by id');
    }

    return findPodcast;
  }
}
