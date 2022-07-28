import IVideoData from '@domain/videos/data';
import { IVideoProps, IVideoUpdate } from '@domain/videos/entities';
import { Video } from '../../../database/models/videos';

export default class VideoDataProvider implements IVideoData {
  public async create(props: IVideoProps): Promise<IVideoProps> {
    const newVideo = new Video(props);

    const saveNewVideo = await newVideo.save();

    if (!saveNewVideo) {
      throw new Error('Cannot save this video on database');
    }

    return saveNewVideo ?? {};
  }

  public async findAll() {
    const findAllVideos = await Video.find();

    if (!findAllVideos) {
      throw new Error('Unexpected error ocurred on find all videos');
    }

    return findAllVideos ?? [];
  }

  public async findById(id: string) {
    const findVideo = await Video.findOne({ id });

    if (!findVideo) {
      throw new Error(
        'Unexpected error ocurred to find video on database'
      );
    }

    return findVideo ?? {};
  }

  public async delete(id: string) {
    const deleteVideo = await Video.findOneAndDelete({ id });

    if (!deleteVideo) {
      throw new Error(
        'Cannot find and delete this video on database'
      );
    }

    return deleteVideo;
  }

  public async update(id: string, data: IVideoProps) {
    const findAndUpdateVideo = await Video.findOneAndUpdate(
      { id },
      { data }
    );

    if (!findAndUpdateVideo) {
      throw new Error(
        'Unexpected error on find and update this video'
      );
    }

    return findAndUpdateVideo ?? {};
  }
}
