import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

import IUserData, { IUserUpdateDTO } from '@domain/user/data';
import { IUserProps } from '@domain/user/entities/IUserEntity';
import { User } from '../../../database/models/user/UserSchema';
import { genToken } from '../../../infra/http/shared/middlewares/Token';

export default class UserDataProvider implements IUserData {
  async update({ id, data }: IUserUpdateDTO): Promise<IUserProps> {
    try {
      const user = await User.findOneAndUpdate({ id }, data);

      return user as IUserProps;
    } catch (error) {
      throw new Error(`An error ocurred on update user: ${error}`);
    }
  }

  public async register(user: IUserProps): Promise<IUserProps> {
    try {
      const newUser = new User<IUserProps>(user);
      const saveUser = await newUser?.save();

      const userObjectId = new mongoose.Types.ObjectId(
        `${saveUser?._id}`
      );
      const userObjectIdString = userObjectId.toString();

      const registeredUser = await User.findOneAndUpdate<IUserProps>(
        { id: saveUser?.id },
        { acessToken: genToken(userObjectIdString) }
      );

      return registeredUser || ({} as IUserProps);
    } catch (error) {
      throw new Error(`Cannot possible to register user: ${error}`);
    }
  }

  public async login({
    email,
    password,
  }: IUserProps): Promise<IUserProps> {
    const loginUser = await User?.findOne<IUserProps>({
      email,
    });

    const comparePassword = bcryptjs.compareSync(
      `${password}`,
      loginUser?.password ? loginUser?.password : ''
    );

    if (!comparePassword) {
      throw new Error('Incorrect password!');
    }

    if (!loginUser) {
      throw new Error('Cannot find user!');
    }

    return loginUser;
  }

  public async findById(id: string): Promise<IUserProps> {
    const findUser = await User.findOne<IUserProps>({ _id: id });

    if (!findUser) {
      throw new Error('Cannot find this user!');
    }

    return findUser;
  }
}
