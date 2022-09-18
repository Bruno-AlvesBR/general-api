import { IPodcastBody, IPodcastProps } from '../entities';

export default interface IPodcastData {
  register(props: IPodcastBody): Promise<IPodcastProps>;
  findAll(): Promise<IPodcastProps[]>;
  findById(id: string): Promise<IPodcastProps>;
  update(props: IPodcastBody): Promise<IPodcastProps>;
  remove(id: string): Promise<IPodcastProps | null>;
}
