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
exports.FindAllCategoriesController = void 0;
const tsyringe_1 = require("tsyringe");
const FindAllCategoriesUseCase_1 = require("../../../../domain/categories/useCases/FindAllCategoriesUseCase");
class FindAllCategoriesController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllCategoriesUseCase = tsyringe_1.container.resolve(FindAllCategoriesUseCase_1.FindAllCategoriesUseCase);
            const { limit, offset } = request.query;
            try {
                const categories = yield findAllCategoriesUseCase.execute({
                    limit: Number(limit),
                    offset: Number(offset),
                });
                return response.status(200).json(categories);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.FindAllCategoriesController = FindAllCategoriesController;
