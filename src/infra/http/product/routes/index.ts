import { Router } from 'express';

import ProductCreateController from '../controllers/ProductCreateController';
import ProductUpdateController from '../controllers/ProductUpdateController';
import ProductFindAllController from '../controllers/ProductFindAllController';
import ProductFindBySlugController from '../controllers/ProductFindBySlugController';
import ProductDeleteController from '../controllers/ProductDeleteController';
import { FindAllByCategoryController } from '../controllers/FindAllByCategoryController';
import { FindAllReleasesController } from '../controllers/FindAllReleasesController';
import { FindAllPromotionsController } from '../controllers/FindAllPromotionsController';

export const productRouter = Router();
const productCreateController = new ProductCreateController();
const productUpdateController = new ProductUpdateController();
const productFindAllController = new ProductFindAllController();
const productFindBySlugController = new ProductFindBySlugController();
const productDeleteController = new ProductDeleteController();
const findAllByCategoryController = new FindAllByCategoryController();
const findAllReleasesController = new FindAllReleasesController();
const findAllPromotionsController = new FindAllPromotionsController();

productRouter.get('/', productFindAllController.index);
productRouter.get('/releases', findAllReleasesController.index);
productRouter.get('/promotions', findAllPromotionsController.index);
productRouter.get('/:slug', productFindBySlugController.index);
productRouter.get(
  '/category/:category',
  findAllByCategoryController.index
);
productRouter.post('/create', productCreateController.index);
productRouter.put('/:id', productUpdateController.index);
productRouter.delete('/:id', productDeleteController.index);
