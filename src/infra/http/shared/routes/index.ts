import { Router } from 'express';

import { podcastRouter } from '../../podcast/routes';
import { productRouter } from '../../product/routes';
import { userRouter } from '../../user/routes';
import { videosRouter } from '../../videos/routes';
import authTokenApi from '../middlewares/Auth';

export const routes = Router();

routes.use('/user', userRouter);
routes.use('/product', authTokenApi, productRouter);
routes.use('/podcasts', authTokenApi, podcastRouter);
routes.use('/videos', authTokenApi, videosRouter);
