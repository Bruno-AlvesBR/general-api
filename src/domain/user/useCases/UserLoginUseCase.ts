import { inject, injectable } from 'tsyringe';
import IUseCase from 'core/UseCase';

import IUserData from '../data';
import { IUserProps } from '../entities/IUserEntity';

@injectable()
export default class UserLoginUseCase
  implements IUseCase<any, IUserProps>
{
  constructor(
    @inject('UserDataProvider')
    private userDataProvider: IUserData
  ) {}

  public async execute(requestDTO?: any): Promise<IUserProps> {
    return this.userDataProvider.login(requestDTO);
  }
}
