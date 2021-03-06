"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const ProductCreateController_1 = __importDefault(require("../controllers/ProductCreateController"));
const ProductUpdateController_1 = __importDefault(require("../controllers/ProductUpdateController"));
const ProductFindAllController_1 = __importDefault(require("../controllers/ProductFindAllController"));
const ProductFindBySlugController_1 = __importDefault(require("../controllers/ProductFindBySlugController"));
const ProductDeleteController_1 = __importDefault(require("../controllers/ProductDeleteController"));
exports.productRouter = (0, express_1.Router)();
const productCreateController = new ProductCreateController_1.default();
const productUpdateController = new ProductUpdateController_1.default();
const productFindAllController = new ProductFindAllController_1.default();
const productFindBySlugController = new ProductFindBySlugController_1.default();
const productDeleteController = new ProductDeleteController_1.default();
exports.productRouter.get('/foods', productFindAllController.index);
exports.productRouter.get('/:slug', productFindBySlugController.index);
exports.productRouter.post('/create', productCreateController.index);
exports.productRouter.put('/:id', productUpdateController.index);
exports.productRouter.delete('/:id', productDeleteController.index);
