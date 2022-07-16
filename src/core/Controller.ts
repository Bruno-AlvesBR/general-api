export default interface IController<Request, Response> {
  index(request: Request, response: Response): Promise<Response>;
}
