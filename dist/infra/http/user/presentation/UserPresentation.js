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
exports.UserPresentation = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema_1 = require("../../../../providers/database/user/UserSchema");
class UserPresentation {
    register({ id, firstName, lastName, email, password, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new UserSchema_1.User({
                id,
                name: {
                    firstName,
                    lastName,
                },
                email,
                password,
            });
            const saveUser = yield newUser.save();
            if (!saveUser) {
                throw new Error('Unexpected error occured!');
            }
            return saveUser;
        });
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginUser = yield UserSchema_1.User.findOne({
                email: email,
            });
            const comparePassword = bcryptjs_1.default.compareSync(`${password}`, loginUser === null || loginUser === void 0 ? void 0 : loginUser.password);
            if (!comparePassword) {
                throw new Error('Incorrect password!');
            }
            if (!loginUser) {
                throw new Error('Cannot find user!');
            }
            return loginUser;
        });
    }
}
exports.UserPresentation = UserPresentation;
