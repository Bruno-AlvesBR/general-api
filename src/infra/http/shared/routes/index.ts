import { Router } from 'express';

import { podcastRouter } from '../../podcast/routes';
import { productRouter } from '../../product/routes';
import { userRouter } from '../../user/routes';
import { videosRouter } from '../../videos/routes';

export const routes = Router();

routes.use('/user', userRouter);
routes.use('/product', productRouter);
routes.use('/podcasts', podcastRouter);
routes.use('/videos', videosRouter);
