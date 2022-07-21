import { Router } from 'express';

import UserFindByIdController from '../controllers/UserFindByIdController';
import UserRegisterController from '../controllers/UserRegisterController';
import UserLoginController from '../controllers/UserLoginController';

export const userRouter = Router();
const userFindByIdController = new UserFindByIdController();
const userRegisterController = new UserRegisterController();
const userLoginController = new UserLoginController();

userRouter.post('/register', userRegisterController.index);
userRouter.post('/login', userLoginController.index);
userRouter.get('/:id', userFindByIdController.index);
