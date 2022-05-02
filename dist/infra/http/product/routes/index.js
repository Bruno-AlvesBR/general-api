"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const FoodController_1 = require("../controllers/FoodController");
exports.productRouter = (0, express_1.Router)();
const foodController = new FoodController_1.FoodController();
exports.productRouter.post('/create', foodController.create);