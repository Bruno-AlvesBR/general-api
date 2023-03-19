import { Router } from 'express';

import { podcastRouter } from '../../podcast/routes';
import { productRouter } from '../../product/routes';
import { userRouter } from '../../user/routes';
import { videosRouter } from '../../videos/routes';
import { cartRouter } from '../../chart/routes';
import { bannerRouter } from '../../banner/routes';

export const routes = Router();

routes.use('/user', userRouter);
routes.use('/product', productRouter);
routes.use('/podcasts', podcastRouter);
routes.use('/videos', videosRouter);
routes.use('/cart', cartRouter);
routes.use('/banner', bannerRouter);
