"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserFindByIdController_1 = __importDefault(require("../controllers/UserFindByIdController"));
const UserRegisterController_1 = __importDefault(require("../controllers/UserRegisterController"));
const UserLoginController_1 = __importDefault(require("../controllers/UserLoginController"));
exports.userRouter = (0, express_1.Router)();
const userFindByIdController = new UserFindByIdController_1.default();
const userRegisterController = new UserRegisterController_1.default();
const userLoginController = new UserLoginController_1.default();
exports.userRouter.post('/register', userRegisterController.index);
exports.userRouter.post('/login', userLoginController.index);
exports.userRouter.get('/:id', userFindByIdController.index);
