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
exports.FindCategoryByIdController = void 0;
const tsyringe_1 = require("tsyringe");
const FindCategoryByIdUseCase_1 = require("../../../../domain/categories/useCases/FindCategoryByIdUseCase");
class FindCategoryByIdController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const findCategoryByIdUseCase = tsyringe_1.container.resolve(FindCategoryByIdUseCase_1.FindCategoryByIdUseCase);
            const { id } = request.params;
            try {
                const category = yield findCategoryByIdUseCase.execute(id);
                return response.status(200).json(category);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.FindCategoryByIdController = FindCategoryByIdController;
