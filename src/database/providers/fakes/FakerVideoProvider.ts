import IVideoData from '@domain/videos/data';
import { IVideoProps } from '@domain/videos/entities';

export default class FakerVideoProvider implements IVideoData {
  constructor(
    private video: IVideoProps[] = [
      {
        id: 'video-1',
        title: 'video-1',
        description: 'video-1',
        duration: 20,
        file: {
          image: 'video-1',
          type: 'video-1',
          url: 'video-1',
        },
        rating: 5,
      },
    ]
  ) {}

  public async create(props?: IVideoProps): Promise<IVideoProps> {
    return props ?? {};
  }

  public async findAll(): Promise<IVideoProps[]> {
    return this.video;
  }

  public async findById(): Promise<IVideoProps> {
    return this.video[0];
  }

  public async delete(): Promise<IVideoProps> {
    return this.video[0];
  }

  public async update(data: IVideoProps): Promise<IVideoProps> {
    return {
      ...this.video[0],
      ...data,
    };
  }
}
