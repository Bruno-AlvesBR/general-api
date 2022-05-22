import { Router } from 'express';

import { podcastRouter } from '../../podcast/routes';
import { productRouter } from '../../product/routes';
import { userRouter } from '../../user/routes';

export const routes = Router();

routes.use('/user', userRouter);
routes.use('/product', productRouter);
routes.use('/podcasts', podcastRouter);
