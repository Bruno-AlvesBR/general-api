import { Router } from 'express';

import { productRouter } from '../../product/routes';
import { userRouter } from '../../user/routes';

export const routes = Router();

routes.use('/user', userRouter);
routes.use('/product', productRouter);
