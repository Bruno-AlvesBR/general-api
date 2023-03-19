import { Router } from 'express';

import { AddProductToCartController } from '../controllers/AddProductToCartController';
import { FindAllProductsCartController } from '../controllers/FindAllCartController';
import { CartRemoveProductController } from '../controllers/CartRemoveProductController';

export const cartRouter = Router();

const addProductToCartController = new AddProductToCartController();
const findAllProductsCartController =
  new FindAllProductsCartController();
const cartRemoveProductController = new CartRemoveProductController();

cartRouter.put('/:id', addProductToCartController.index);
cartRouter.get('/:id', findAllProductsCartController.index);
cartRouter.delete('/:id', cartRemoveProductController.index);
