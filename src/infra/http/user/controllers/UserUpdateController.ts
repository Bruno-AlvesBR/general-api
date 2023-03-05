import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUserProps } from '@domain/user/entities/IUserEntity';
import { UserUpdateUseCase } from '../../../../domain/user/useCases/UserUpdateUseCase';

class UserUpdateController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<IUserProps>> {
    const { id } = request.params;
    const data = request.body;
    const userUpdateUseCase = container.resolve(UserUpdateUseCase);

    try {
      const user = await userUpdateUseCase.execute({ id, data });

      return response.json(user);
    } catch (error) {
      return response.status(503).json({ message: error });
    }
  }
}

export { UserUpdateController };
