export default interface IPresentation<DTO, Response> {
  handle?(requestDTO?: DTO): Promise<Response>;
}
