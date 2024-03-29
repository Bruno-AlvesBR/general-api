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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserLoginPresentation_1 = require("../presentation/UserLoginPresentation");
class UserLoginController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const userLoginUsePresentation = tsyringe_1.container.resolve(UserLoginPresentation_1.UserLoginPresentation);
            try {
                const userLogin = yield userLoginUsePresentation.handle({
                    email,
                    password,
                });
                const userBase64 = Buffer.from(userLogin === null || userLogin === void 0 ? void 0 : userLogin.id).toString('base64');
                response.cookie('authDunkedToken', userBase64, {
                    maxAge: 86400 * 1000,
                });
                return response.json(userLogin);
            }
            catch (err) {
                return response.status(403).json(err);
            }
        });
    }
}
exports.default = UserLoginController;
