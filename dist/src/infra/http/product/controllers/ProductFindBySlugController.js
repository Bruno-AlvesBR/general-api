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
const ProductFindBySlugUseCase_1 = __importDefault(require("../../../../domain/product/useCases/ProductFindBySlugUseCase"));
class ProductFindBySlugController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = request.params;
            const productFindBySlugUseCase = tsyringe_1.container.resolve(ProductFindBySlugUseCase_1.default);
            try {
                const findProductBySlug = yield productFindBySlugUseCase.execute(slug);
                if (!findProductBySlug) {
                    return response
                        .status(403)
                        .json('An error ocurred on find a product');
                }
                return response.status(200).json(findProductBySlug);
            }
            catch (err) {
                return response.status(403).json(err);
            }
        });
    }
}
exports.default = ProductFindBySlugController;
