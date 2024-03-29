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
const UserRegisterUseCase_1 = require("../../../../domain/user/useCases/UserRegisterUseCase");
let UserRegisterPresentation = class UserRegisterPresentation {
    handle({ firstName, lastName, email, password, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRegisterUseCase = tsyringe_1.container.resolve(UserRegisterUseCase_1.UserRegisterUseCase);
            const hashPassword = bcryptjs_1.default.hashSync(`${password}`, 8);
            const userObject = {
                id: (0, uuid_1.v4)(),
                name: {
                    firstName,
                    lastName,
                },
                email,
                password: hashPassword,
                cartId: (0, uuid_1.v4)(),
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
