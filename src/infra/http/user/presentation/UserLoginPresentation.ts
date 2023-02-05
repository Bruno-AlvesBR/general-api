import { IUserDTO } from '../../../../domain/user/data';
import { IUserProps } from '../../../../domain/user/entities/IUserEntity';
import UserLoginUseCase from '../../../../domain/user/useCases/UserLoginUseCase';
import { redis } from '../../../../configs/redis';
import IPresentation from '../../../../core/Presentation';
import { container, injectable } from 'tsyringe';

@injectable()
export class UserLoginPresentation
  implements IPresentation<IUserDTO, IUserProps>
{
  async handle({ email, password }: IUserDTO): Promise<IUserProps> {
    const userLoginUseCase = container.resolve(UserLoginUseCase);

    const syncCache = await redis.get('user-login');
    if (syncCache) return syncCache;

    const userLogin = await userLoginUseCase.execute({
      email,
      password,
    });

    await redis.set('user-login', JSON.stringify(userLogin));

    return userLogin;
  }
}
