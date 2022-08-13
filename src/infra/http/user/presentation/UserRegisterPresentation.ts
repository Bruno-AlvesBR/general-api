import { container, injectable } from 'tsyringe';
import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import { IUserLogin } from '@domain/user/entities/IUserEntity';
import UserRegisterUseCase from '../../../../domain/user/useCases/UserRegisterUseCase';
import IPresentation from 'core/Presentation';
import { genToken } from '../../../../infra/http/shared/middlewares/Token';

@injectable()
export default class UserRegisterPresentation
  implements IPresentation<IUserLogin>
{
  public async handle(data?: IUserLogin) {
    const userRegisterUseCase = container.resolve(
      UserRegisterUseCase
    );

    const hashPassword = bcryptjs.hashSync(`${data?.password}`, 8);

    const userObject = {
      id: uuid(),
      name: {
        firstName: data?.firstName ?? 'guest',
        lastName: data?.lastName ?? '9128437',
      },
      email: data?.email,
      password: hashPassword,
      admin: false,
      acessToken: genToken(data?.id),
    };

    const registerUser = await userRegisterUseCase.execute(
      userObject
    );

    return registerUser;
  }
}
