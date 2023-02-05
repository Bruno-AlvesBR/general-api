import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUserProps } from '../../../../domain/user/entities/IUserEntity';
import IController from '../../../../core/Controller';
import { UserLoginPresentation } from '../presentation/UserLoginPresentation';

export default class UserLoginController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IUserProps>> {
    const { email, password } = request.body;
    const userLoginUsePresentation = container.resolve(
      UserLoginPresentation
    );

    try {
      const userLogin = await userLoginUsePresentation.handle({
        email,
        password,
      });

      return response.status(200).json(userLogin);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
