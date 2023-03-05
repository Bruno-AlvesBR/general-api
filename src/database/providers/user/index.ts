import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

import IUserData, { IUserUpdateDTO } from '@domain/user/data';
import { IUserProps } from '@domain/user/entities/IUserEntity';
import { User } from '../../../database/models/user/UserSchema';
import { genToken } from '../../../infra/http/shared/middlewares/Token';

export default class UserDataProvider implements IUserData {
  async update({ id, data }: IUserUpdateDTO): Promise<IUserProps> {
    try {
      const findedUser = await User?.findOne({ id });

      let concatProductsIntoCart = findedUser?.cart?.products
        ? [...findedUser?.cart?.products]
        : [];

      data?.cart?.products?.filter((product) => {
        !findedUser?.cart?.products?.some(
          (oldProduct) => oldProduct === product
        )
          ? concatProductsIntoCart.push(product)
          : null;
      });

      const user = await User.findOneAndUpdate(
        { id },
        {
          ...data,
          cart: {
            products: concatProductsIntoCart,
          },
        }
      );

      return user as IUserProps;
    } catch (error) {
      console.error(`An error ocurred on update user: ${error}`);
      return {} as IUserProps;
    }
  }

  public async register(user: IUserProps): Promise<IUserProps> {
    const newUser = new User<IUserProps>(user);
    const saveUser = await newUser?.save();

    const userObjectId = new mongoose.Types.ObjectId(
      `${saveUser?._id}`
    );
    const userObjectIdString = userObjectId.toString();

    const registeredUser = await User?.findOneAndUpdate<IUserProps>(
      { id: saveUser?.id },
      { acessToken: genToken(userObjectIdString) }
    );

    if (!registeredUser) {
      throw new Error('Unexpected error occured!');
    }

    return registeredUser;
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
