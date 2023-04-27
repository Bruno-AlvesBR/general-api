import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { FindAllProductsCartController } from '../controllers/FindAllCartController';

export const cartRouter = Router();

const findAllProductsCartController =
  new FindAllProductsCartController();

cartRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: { ids: Joi.string() },
  }),
  findAllProductsCartController.index
);
