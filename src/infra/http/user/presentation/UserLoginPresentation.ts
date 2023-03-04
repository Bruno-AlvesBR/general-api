import { container, injectable } from 'tsyringe';

import { IUserDTO } from '../../../../domain/user/data';
import { IUserProps } from '../../../../domain/user/entities/IUserEntity';
import UserLoginUseCase from '../../../../domain/user/useCases/UserLoginUseCase';
import IPresentation from '../../../../core/Presentation';

@injectable()
export class UserLoginPresentation
  implements IPresentation<IUserDTO, IUserProps>
{
  async handle({ email, password }: IUserDTO): Promise<IUserProps> {
    const userLoginUseCase = container.resolve(UserLoginUseCase);

    const userLogin = await userLoginUseCase.execute({
      email,
      password,
    });

    return userLogin;
  }
}
