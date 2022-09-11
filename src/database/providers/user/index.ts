import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

import IUserData from '@domain/user/data';
import { IUserProps } from '@domain/user/entities/IUserEntity';
import { User } from '../../../database/models/user/UserSchema';
import { genToken } from '../../../infra/http/shared/middlewares/Token';

export default class UserDataProvider implements IUserData {
  public async register(user: IUserProps) {
    const newUser = new User(user);
    const saveUser = await newUser?.save();

    const userObjectId = new mongoose.Types.ObjectId(
      `${saveUser?._id}`
    );
    const userObjectIdString = userObjectId.toString();

    const updatedUser = await User?.findOneAndUpdate(
      { id: saveUser?.id },
      { acessToken: genToken(userObjectIdString) }
    );

    if (!updatedUser) {
      throw new Error('Unexpected error occured!');
    }

    return updatedUser;
  }

  public async login({ email, password }: IUserProps) {
    const loginUser = await User?.findOne({
      email: email,
    });

    const comparePassword = bcryptjs.compareSync(
      `${password}`,
      loginUser?.password
    );

    if (!comparePassword) {
      throw new Error('Incorrect password!');
    }

    if (!loginUser) {
      throw new Error('Cannot find user!');
    }

    return loginUser;
  }

  public async findById(id: string) {
    const findUser = await User.findOne({ id });

    if (!findUser) {
      throw new Error('Cannot find this user!');
    }

    return findUser;
  }
}
