import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import { IUserLogin } from '../../../../domain/user/entities/IUserEntity';
import { UserPresentation } from '../presentation/UserPresentation';

export class UserController {
  public async register(
    request: Request,
    response: Response
  ): Promise<Response<IUserLogin>> {
    const { firstName, lastName, email, password } =
      request.body;

    const userPresentation = new UserPresentation();

    try {
      const hashPassword = bcryptjs.hashSync(password, 8);

      if (!hashPassword) {
        return response
          .status(400)
          .json(
            'Unexpected error ocurred when encrypt the password!'
          );
      }

      const registerUser = await userPresentation.register({
        id: uuid(),
        firstName: firstName ? firstName : 'guest',
        lastName: lastName ? lastName : '9128437',
        email,
        password: hashPassword,
        admin: false,
      });

      return response.status(201).json(registerUser);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
  public async login(
    request: Request,
    response: Response
  ): Promise<Response<IUserLogin>> {
    const { email, password } = request.body;

    const userPresentation = new UserPresentation();

    try {
      const userLogin = await userPresentation.login({
        email,
        password,
      });

      return response.status(200).json(userLogin);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  public async findById(
    request: Request,
    response: Response
  ): Promise<Response<IUserLogin>> {
    const { id } = request.params;

    const userPresentation = new UserPresentation();

    try {
      const findUser = await userPresentation.findById(id);

      return response.status(200).json(findUser);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
