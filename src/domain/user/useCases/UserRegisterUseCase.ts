import { inject, injectable } from 'tsyringe';
import IUseCase from 'core/UseCase';

import { IUserProps } from '../entities/IUserEntity';
import IUserData from '../data';

@injectable()
class UserRegisterUseCase implements IUseCase<any, IUserProps> {
  constructor(
    @inject('UserDataProvider')
    private userDataProvider: IUserData
  ) {}

  execute(requestDTO?: any): Promise<IUserProps> {
    return this.userDataProvider.register(requestDTO);
  }
}

export { UserRegisterUseCase };
