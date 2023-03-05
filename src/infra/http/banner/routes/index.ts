import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CreateBannerController } from '../controllers/CreateBannerController';
import { FindAllBannersController } from '../controllers/FindAllBannersController';

const bannerRouter = Router();

const createBannerController = new CreateBannerController();
const findAllBannersController = new FindAllBannersController();

bannerRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      limit: Joi.number().greater(0).required(),
      offset: Joi.number().required(),
    },
  }),
  findAllBannersController.index
);

bannerRouter.post('/create', createBannerController.index);

export { bannerRouter };
