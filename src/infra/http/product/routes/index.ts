import { Router } from 'express';

import ProductCreateController from '../controllers/ProductCreateController';
import ProductUpdateController from '../controllers/ProductUpdateController';
import ProductFindAllController from '../controllers/ProductFindAllController';
import ProductFindBySlugController from '../controllers/ProductFindBySlugController';
import ProductDeleteController from '../controllers/ProductDeleteController';

export const productRouter = Router();
const productCreateController = new ProductCreateController();
const productUpdateController = new ProductUpdateController();
const productFindAllController = new ProductFindAllController();
const productFindBySlugController = new ProductFindBySlugController();
const productDeleteController = new ProductDeleteController();

productRouter.get('/', productFindAllController.index);
productRouter.get('/:slug', productFindBySlugController.index);
productRouter.post('/create', productCreateController.index);
productRouter.put('/:id', productUpdateController.index);
productRouter.delete('/:id', productDeleteController.index);
