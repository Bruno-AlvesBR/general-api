import { IUserProps } from '../entities/IUserEntity';

export interface IUserDTO {
  email: string;
  password: string;
}

export default interface IUserData {
  register(props: IUserProps): Promise<IUserProps>;
  login({ email, password }: IUserProps): Promise<IUserProps>;
  findById(id: string): Promise<IUserProps>;
}
