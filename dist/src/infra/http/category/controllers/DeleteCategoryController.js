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
exports.DeleteCategoryController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteCategoryUseCase_1 = require("../../../../domain/categories/useCases/DeleteCategoryUseCase");
class DeleteCategoryController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteCategoryUseCase = tsyringe_1.container.resolve(DeleteCategoryUseCase_1.DeleteCategoryUseCase);
            const { id } = request.params;
            try {
                yield deleteCategoryUseCase.execute(id);
                return response
                    .status(200)
                    .json({ message: `Success on delete the category: ${id}` });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
