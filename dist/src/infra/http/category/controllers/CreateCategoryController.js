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
exports.CreateCategoryController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateCategoryUseCase_1 = require("../../../../domain/categories/useCases/CreateCategoryUseCase");
class CreateCategoryController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createCategoryUseCase = tsyringe_1.container.resolve(CreateCategoryUseCase_1.CreateCategoryUseCase);
            const props = request.body;
            try {
                const category = yield createCategoryUseCase.execute(props);
                return response.status(201).json(category);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CreateCategoryController = CreateCategoryController;
