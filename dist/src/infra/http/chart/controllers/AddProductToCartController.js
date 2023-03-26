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
exports.AddProductToCartController = void 0;
const tsyringe_1 = require("tsyringe");
const CartAddProductUseCase_1 = require("../../../../domain/chart/useCases/CartAddProductUseCase");
class AddProductToCartController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productsId } = request.body;
            const { id } = request.params;
            const cartAddProductUseCase = tsyringe_1.container.resolve(CartAddProductUseCase_1.CartAddProductUseCase);
            try {
                const cart = yield cartAddProductUseCase.execute({
                    id,
                    productsId,
                });
                return response.status(201).json(cart);
            }
            catch (err) {
                return response.status(500).json({ message: err });
            }
        });
    }
}
exports.AddProductToCartController = AddProductToCartController;
