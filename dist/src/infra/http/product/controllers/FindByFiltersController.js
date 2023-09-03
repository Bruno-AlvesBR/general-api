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
exports.FindByFiltersController = void 0;
const tsyringe_1 = require("tsyringe");
const ProductFindByFiltersUseCase_1 = require("../../../../domain/product/useCases/ProductFindByFiltersUseCase");
class FindByFiltersController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const productFindByFiltersUseCase = tsyringe_1.container.resolve(ProductFindByFiltersUseCase_1.ProductFindByFiltersUseCase);
            const props = request.body;
            const { limit, offset } = request.query;
            try {
                const products = yield productFindByFiltersUseCase.execute(Object.assign({ limit: String(limit), offset: String(offset) }, props));
                return response.json(products);
            }
            catch (error) {
                return response.status(503).json({ message: error });
            }
        });
    }
}
exports.FindByFiltersController = FindByFiltersController;
