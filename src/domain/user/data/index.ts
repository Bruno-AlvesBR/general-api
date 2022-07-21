import { IUserProps } from '../entities/IUserEntity';

export default interface IUserData {
    register(props: IUserProps): Promise<IUserProps>;
    login({ email, password }: IUserProps): Promise<IUserProps>;
    findById(id: string): Promise<IUserProps>;
}
