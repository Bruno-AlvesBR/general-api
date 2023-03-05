import { IUserProps } from '../entities/IUserEntity';

export interface IUserDTO {
  email: string;
  password: string;
}

export interface IUserUpdateDTO {
  id: string;
  data: IUserProps;
}

abstract class IUserData {
  abstract register(props: IUserProps): Promise<IUserProps>;

  abstract login({
    email,
    password,
  }: IUserProps): Promise<IUserProps>;

  abstract findById(id: string): Promise<IUserProps>;

  abstract update(props: IUserUpdateDTO): Promise<IUserProps>;
}

export default IUserData;
