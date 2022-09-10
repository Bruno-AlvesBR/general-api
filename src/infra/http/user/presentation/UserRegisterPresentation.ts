import { container, injectable } from 'tsyringe';
import bcryptjs from 'bcryptjs';
import IPresentation from 'core/Presentation';
import { v4 as uuid } from 'uuid';

import { IUserLogin } from '@domain/user/entities/IUserEntity';
import UserRegisterUseCase from '../../../../domain/user/useCases/UserRegisterUseCase';

@injectable()
export default class UserRegisterPresentation
  implements IPresentation<IUserLogin>
{
  public async handle({
    firstName,
    lastName,
    email,
    password,
  }: IUserLogin) {
    const userRegisterUseCase = container.resolve(
      UserRegisterUseCase
    );

    const hashPassword = bcryptjs.hashSync(`${password}`, 8);

    const userObject = {
      id: uuid(),
      name: {
        firstName,
        lastName,
      },
      email,
      password: hashPassword,
    };

    const registerUser = await userRegisterUseCase.execute(
      userObject
    );

    return registerUser;
  }
}
