export default interface IPodcastData {
  register(props: IPodcastProps): Promise<IPodcastProps>;
  findAll(): Promise<IPodcastProps[]>;
  findById(id: string): Promise<IPodcastProps>;
}
