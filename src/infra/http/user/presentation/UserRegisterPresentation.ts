import { container, injectable } from 'tsyringe';
import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import {
  IUserLogin,
  IUserProps,
} from '@domain/user/entities/IUserEntity';
import { UserRegisterUseCase } from '../../../../domain/user/useCases/UserRegisterUseCase';
import IPresentation from 'core/Presentation';

@injectable()
export default class UserRegisterPresentation
  implements IPresentation<IUserLogin, IUserProps>
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
      cartId: uuid(),
    };

    const registerUser = await userRegisterUseCase.execute(
      userObject
    );

    return registerUser;
  }
}
