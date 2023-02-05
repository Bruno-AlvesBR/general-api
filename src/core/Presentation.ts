export default interface IPresentation<DTO, Entity> {
  handle(props: DTO): Promise<Entity>;
}
