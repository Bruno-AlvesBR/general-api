import bcryptjs from 'bcryptjs';

import { IUserLogin } from '../../../../domain/user/entities/IUserEntity';
import { User } from '../../../../providers/database/user/UserSchema';
import { genToken } from '../../shared/middlewares/Token';

export class UserPresentation {
  public async register({
    id,
    firstName,
    lastName,
    email,
    password,
    admin = false,
  }: IUserLogin) {
    const newUser = new User({
      id,
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      admin,
      acessToken: genToken(id),
    });

    const saveUser = await newUser.save();

    if (!saveUser) {
      throw new Error('Unexpected error occured!');
    }

    return saveUser;
  }
  public async login({ email, password }: IUserLogin) {
    const loginUser = await User.findOne({
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
