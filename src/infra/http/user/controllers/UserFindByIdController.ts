import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUserProps } from '../../../../domain/user/entities/IUserEntity';
import IController from 'core/Controller';
import UserFindByIdUseCase from '../../../../domain/user/useCases/UserFindByIdUseCase';

export default class UserFindByIdController
  implements IController<Request, Response>
{
  public async index(
    request: Request,
    response: Response
  ): Promise<Response<IUserProps>> {
    const { id } = request.params;
    const userFindByIdUseCase = container.resolve(
      UserFindByIdUseCase
    );

    try {
      const findUser = await userFindByIdUseCase.execute(id);

      if (String(findUser)?.length <= 0 && !findUser) {
        return response
          .status(403)
          .json({ message: 'Cannot find user by id' });
      }

      return response.status(200).json(findUser);
    } catch (err) {
      return response.status(500).json(err);
    }
  }
}
