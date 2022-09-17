import { inject, injectable } from 'tsyringe';

import IUseCase from 'core/UseCase';
import IUserData from '../data';
import { IUserProps } from '../entities/IUserEntity';

@injectable()
export default class UserFindByIdUseCase
  implements IUseCase<string, IUserProps>
{
  constructor(
    @inject('UserDataProvider')
    private userDataProvider: IUserData
  ) {}

  public async execute(requestDTO: string): Promise<IUserProps> {
    return this.userDataProvider.findById(requestDTO);
  }
}
