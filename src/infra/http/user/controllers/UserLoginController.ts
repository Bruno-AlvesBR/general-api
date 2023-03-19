import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IController from '../../../../core/Controller';
import { UserLoginPresentation } from '../presentation/UserLoginPresentation';

export default class UserLoginController
  implements IController<Request, Response>
{
  public async index(request: Request, response: Response) {
    const { email, password } = request.body;
    const userLoginUsePresentation = container.resolve(
      UserLoginPresentation
    );

    try {
      const userLogin = await userLoginUsePresentation.handle({
        email,
        password,
      });

      const userBase64 = Buffer.from(userLogin?.id).toString(
        'base64'
      );
      response.cookie('authDunkedToken', userBase64, {
        maxAge: 86400 * 1000,
      });

      return response.json(userLogin);
    } catch (err) {
      return response.status(403).json(err);
    }
  }
}
