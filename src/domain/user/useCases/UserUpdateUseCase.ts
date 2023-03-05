import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IUserData, { IUserUpdateDTO } from '../data';
import { IUserProps } from '../entities/IUserEntity';

@injectable()
class UserUpdateUseCase
  implements IUseCase<IUserUpdateDTO, IUserProps>
{
  constructor(
    @inject('UserDataProvider')
    private userProvider: IUserData
  ) {}

  execute(requestDTO: IUserUpdateDTO): Promise<IUserProps> {
    return this.userProvider.update(requestDTO);
  }
}

export { UserUpdateUseCase };
