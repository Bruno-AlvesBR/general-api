"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes_1 = require("../../product/routes");
const routes_2 = require("../../user/routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/user', routes_2.userRouter);
exports.routes.use('/product', routes_1.productRouter);
