import { Router } from 'express';

import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { UpdateCategoryController } from '../controllers/UpdateCategoryController';
import { DeleteCategoryController } from '../controllers/DeleteCategoryController';
import { FindAllCategoriesController } from '../controllers/FindAllCategoriesController';
import { FindCategoryByIdController } from '../controllers/FindCategoryByIdController';

const categoryRouter = Router();

const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const findCategoryByIdController = new FindCategoryByIdController();

categoryRouter.post('/create', createCategoryController.index);
categoryRouter.put('/update/:id', updateCategoryController.index);
categoryRouter.delete('/delete/:id', deleteCategoryController.index);
categoryRouter.get('/all', findAllCategoriesController.index);
categoryRouter.get('/:id', findCategoryByIdController.index);

export { categoryRouter };
