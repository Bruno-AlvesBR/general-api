export default interface IPresentation<DTO> {
  handle(props: DTO): void;
}
