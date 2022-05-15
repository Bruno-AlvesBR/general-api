import { Router } from 'express';

import { UserController } from '../controllers/UserController';

export const userRouter = Router();
const userControllers = new UserController();

userRouter.post('/register', userControllers.register);
userRouter.post('/login', userControllers.login);
userRouter.get('/:id', userControllers.findById);
