import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUserProps } from '@domain/user/entities/IUserEntity';
import IController from 'core/Controller';
import UserRegisterPresentation from '../presentation/UserRegisterPresentation';

export default class UserRegisterController
    implements IController<Request, Response>
{
    public async index(
        request: Request,
        response: Response
    ): Promise<Response<IUserProps>> {
        const { ...data } = request.body;
        const userRegisterPresentation = container.resolve(
            UserRegisterPresentation
        );

        try {
            const registerUser =
                await userRegisterPresentation.handle(data);

            return response.status(201).json(registerUser);
        } catch (err) {
            return response.status(400).json(err);
        }
    }
}
