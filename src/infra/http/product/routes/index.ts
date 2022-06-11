import { Router } from 'express';

import { FoodController } from '../controllers/FoodController';

export const productRouter = Router();
const foodController = new FoodController();

productRouter.get('/foods', foodController.findAll);
productRouter.get('/count', foodController.count);
productRouter.get('/:slug', foodController.findBySlug);
productRouter.post('/create', foodController.create);
productRouter.put('/:id', foodController.update);
productRouter.delete('/:id', foodController.delete);
