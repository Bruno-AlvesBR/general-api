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
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema_1 = require("../../../database/models/user/UserSchema");
const Token_1 = require("../../../infra/http/shared/middlewares/Token");
class UserDataProvider {
    update({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserSchema_1.User.findOneAndUpdate({ id }, data);
                return user;
            }
            catch (error) {
                throw new Error(`An error ocurred on update user: ${error}`);
            }
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new UserSchema_1.User(user);
                const saveUser = yield (newUser === null || newUser === void 0 ? void 0 : newUser.save());
                const userObjectId = new mongoose_1.default.Types.ObjectId(`${saveUser === null || saveUser === void 0 ? void 0 : saveUser._id}`);
                const userObjectIdString = userObjectId.toString();
                const registeredUser = yield UserSchema_1.User.findOneAndUpdate({ id: saveUser === null || saveUser === void 0 ? void 0 : saveUser.id }, { acessToken: (0, Token_1.genToken)(userObjectIdString) });
                return registeredUser || {};
            }
            catch (error) {
                throw new Error(`Cannot possible to register user: ${error}`);
            }
        });
    }
    login({ email, password, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginUser = yield (UserSchema_1.User === null || UserSchema_1.User === void 0 ? void 0 : UserSchema_1.User.findOne({
                email,
            }));
            const comparePassword = bcryptjs_1.default.compareSync(`${password}`, (loginUser === null || loginUser === void 0 ? void 0 : loginUser.password) ? loginUser === null || loginUser === void 0 ? void 0 : loginUser.password : '');
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
            const findUser = yield UserSchema_1.User.findOne({ _id: id });
            if (!findUser) {
                throw new Error('Cannot find this user!');
            }
            return findUser;
        });
    }
}
exports.default = UserDataProvider;
