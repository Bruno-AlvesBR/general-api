"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const CreateCategoryController_1 = require("../controllers/CreateCategoryController");
const UpdateCategoryController_1 = require("../controllers/UpdateCategoryController");
const DeleteCategoryController_1 = require("../controllers/DeleteCategoryController");
const FindAllCategoriesController_1 = require("../controllers/FindAllCategoriesController");
const FindCategoryByIdController_1 = require("../controllers/FindCategoryByIdController");
const categoryRouter = (0, express_1.Router)();
exports.categoryRouter = categoryRouter;
const createCategoryController = new CreateCategoryController_1.CreateCategoryController();
const updateCategoryController = new UpdateCategoryController_1.UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController_1.DeleteCategoryController();
const findAllCategoriesController = new FindAllCategoriesController_1.FindAllCategoriesController();
const findCategoryByIdController = new FindCategoryByIdController_1.FindCategoryByIdController();
categoryRouter.post('/create', createCategoryController.index);
categoryRouter.put('/update/:id', updateCategoryController.index);
categoryRouter.delete('/delete/:id', deleteCategoryController.index);
categoryRouter.get('/all', findAllCategoriesController.index);
categoryRouter.get('/:id', findCategoryByIdController.index);