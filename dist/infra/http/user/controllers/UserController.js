"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const UserPresentation_1 = require("../presentation/UserPresentation");
class UserController {
    register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password } = request.body;
            const userPresentation = new UserPresentation_1.UserPresentation();
            try {
                const hashPassword = bcryptjs_1.default.hashSync(password, 8);
                if (!hashPassword) {
                    return response
                        .status(400)
                        .json('Unexpected error ocurred when encrypt the password!');
                }
                const registerUser = yield userPresentation.register({
                    id: (0, uuid_1.v4)(),
                    firstName: firstName ? firstName : 'guest',
                    lastName: lastName ? lastName : '9128437',
                    email,
                    password: hashPassword,
                    admin: false,
                });
                return response.status(201).json(registerUser);
            }
            catch (err) {
                return response.status(401).json(err);
            }
        });
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const userPresentation = new UserPresentation_1.UserPresentation();
            try {
                const userLogin = yield userPresentation.login({
                    email,
                    password,
                });
                return response.status(200).json(userLogin);
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
}
exports.UserController = UserController;
