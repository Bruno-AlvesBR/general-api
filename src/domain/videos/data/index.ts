import { IVideoProps, IVideoUpdate } from '../entities';

export default interface IVideoData {
  create(props: IVideoProps): Promise<IVideoProps>;
  findAll(): Promise<IVideoProps[]>;
  findById(id: string): Promise<IVideoProps>;
  delete(id: string): Promise<IVideoProps>;
  update(id: string, data: IVideoProps): Promise<IVideoProps>;
}
