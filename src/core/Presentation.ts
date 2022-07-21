export default interface IPresentation<DTO, Response> {
    handle(props: DTO): Promise<Response>;
}
