"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const FindAllCartController_1 = require("../controllers/FindAllCartController");
exports.cartRouter = (0, express_1.Router)();
const findAllProductsCartController = new FindAllCartController_1.FindAllProductsCartController();
exports.cartRouter.get('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: { ids: celebrate_1.Joi.string() },
}), findAllProductsCartController.index);
