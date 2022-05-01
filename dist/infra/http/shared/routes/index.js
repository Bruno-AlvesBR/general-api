"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes_1 = require("../../user/routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/user', routes_1.userRouter);
