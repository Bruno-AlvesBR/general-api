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
const tsyringe_1 = require("tsyringe");
const UserFindByIdUseCase_1 = __importDefault(require("../../../../domain/user/useCases/UserFindByIdUseCase"));
class UserFindByIdController {
    index(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userFindByIdUseCase = tsyringe_1.container.resolve(UserFindByIdUseCase_1.default);
            try {
                const findUser = yield userFindByIdUseCase.execute(id);
                if (((_a = String(findUser)) === null || _a === void 0 ? void 0 : _a.length) <= 0 && !findUser) {
                    return response
                        .status(403)
                        .json({ message: 'Cannot find user by id' });
                }
                return response.status(200).json(findUser);
            }
            catch (err) {
                return response.status(500).json(err);
            }
        });
    }
}
exports.default = UserFindByIdController;
