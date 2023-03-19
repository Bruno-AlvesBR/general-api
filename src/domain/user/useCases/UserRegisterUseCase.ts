import { inject, injectable } from 'tsyringe';
import IUseCase from 'core/UseCase';
import { v4 as uuid } from 'uuid';

import { IUserProps } from '../entities/IUserEntity';
import IUserData from '../data';
import { ICartData } from '../../../domain/chart/data';

@injectable()
class UserRegisterUseCase implements IUseCase<any, IUserProps> {
  constructor(
    @inject('UserDataProvider')
    private userDataProvider: IUserData,

    @inject('CartDataProvider')
    private cartProvider: ICartData
  ) {}

  async execute(requestDTO?: any): Promise<IUserProps> {
    // const user = await this.userDataProvider.register(requestDTO);
    await this.cartProvider.createCart({
      id: requestDTO?.cartId,
      userId: requestDTO?.id,
    });

    // return user;
    return {} as IUserProps;
  }
}

export { UserRegisterUseCase };
