import { Router } from 'express';

import { FoodController } from '../controllers/FoodController';

export const productRouter = Router();
const foodController = new FoodController();

productRouter.post('/create', foodController.create);
productRouter.get('/foods', foodController.findAll);
productRouter.get('/:id', foodController.findById);
productRouter.put('/:id', foodController.update);
