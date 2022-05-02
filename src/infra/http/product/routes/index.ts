import { Router } from 'express';

import { FoodController } from '../controllers/FoodController';

export const productRouter = Router();
const foodController = new FoodController();

productRouter.post('/create', foodController.create);