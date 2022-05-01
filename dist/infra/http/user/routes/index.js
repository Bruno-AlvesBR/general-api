"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
exports.userRouter = (0, express_1.Router)();
const userControllers = new UserController_1.UserController();
exports.userRouter.post('/register', userControllers.register);
exports.userRouter.post('/login', userControllers.login);
