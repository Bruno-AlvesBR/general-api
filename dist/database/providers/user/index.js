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
const UserSchema_1 = require("../../../database/models/user/UserSchema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Token_1 = require("../../../infra/http/shared/middlewares/Token");
class UserDataProvider {
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new UserSchema_1.User(Object.assign({ acessToken: (0, Token_1.genToken)(user === null || user === void 0 ? void 0 : user.id) }, user));
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
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = yield UserSchema_1.User.findOne({ id });
            if (!findUser) {
                throw new Error('Cannot find this user!');
            }
            return findUser;
        });
    }
}
exports.default = UserDataProvider;
