import IVideoData from '@domain/videos/data';
import { IVideoProps } from '@domain/videos/entities';
import { Video } from '../../../database/models/videos';

export default class VideoDataProvider implements IVideoData {
  public async create(data: IVideoProps): Promise<IVideoProps> {
    const newVideo = new Video<IVideoProps>(data);

    const saveNewVideo = await newVideo.save();

    if (!saveNewVideo) {
      throw new Error('Cannot save this video on database');
    }

    return saveNewVideo ?? {};
  }

  public async findAll(): Promise<IVideoProps[]> {
    const findAllVideos = await Video.find<IVideoProps>();

    if (!findAllVideos) {
      throw new Error('Unexpected error ocurred on find all videos');
    }

    return findAllVideos ?? [];
  }

  public async findById(id: string): Promise<IVideoProps> {
    const findVideo = await Video.findOne<IVideoProps>({ id });

    if (!findVideo) {
      throw new Error(
        'Unexpected error ocurred to find video on database'
      );
    }

    return findVideo ?? {};
  }

  public async delete(id: string): Promise<IVideoProps> {
    const deleteVideo = await Video.findOneAndDelete<IVideoProps>({
      id,
    });

    if (!deleteVideo) {
      throw new Error(
        'Cannot find and delete this video on database'
      );
    }

    return deleteVideo ?? {};
  }

  public async update(data: IVideoProps): Promise<IVideoProps> {
    const findAndUpdateVideo =
      await Video?.findOneAndUpdate<IVideoProps>(
        { id: data?.id },
        data
      );

    if (!findAndUpdateVideo) {
      throw new Error(
        'Unexpected error on find and update this video'
      );
    }

    return findAndUpdateVideo ?? {};
  }
}
