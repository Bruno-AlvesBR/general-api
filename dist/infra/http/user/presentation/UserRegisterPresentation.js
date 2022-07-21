"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const tsyringe_1 = require("tsyringe");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const UserRegisterUseCase_1 = __importDefault(require("../../../../domain/user/useCases/UserRegisterUseCase"));
const Token_1 = require("../../../../infra/http/shared/middlewares/Token");
let UserRegisterPresentation = class UserRegisterPresentation {
    handle(data) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const userRegisterUseCase = tsyringe_1.container.resolve(UserRegisterUseCase_1.default);
            const hashPassword = bcryptjs_1.default.hashSync(`${data === null || data === void 0 ? void 0 : data.password}`, 8);
            const userObject = {
                id: (0, uuid_1.v4)(),
                name: {
                    firstName: (_a = data === null || data === void 0 ? void 0 : data.firstName) !== null && _a !== void 0 ? _a : 'guest',
                    lastName: (_b = data === null || data === void 0 ? void 0 : data.lastName) !== null && _b !== void 0 ? _b : '9128437',
                },
                email: data === null || data === void 0 ? void 0 : data.email,
                password: hashPassword,
                admin: false,
                acessToken: (0, Token_1.genToken)(data === null || data === void 0 ? void 0 : data.id),
            };
            const registerUser = yield userRegisterUseCase.execute(userObject);
            return registerUser;
        });
    }
};
UserRegisterPresentation = __decorate([
    (0, tsyringe_1.injectable)()
], UserRegisterPresentation);
exports.default = UserRegisterPresentation;
