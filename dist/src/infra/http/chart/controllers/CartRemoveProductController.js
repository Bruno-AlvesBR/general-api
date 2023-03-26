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
exports.CartRemoveProductController = void 0;
const tsyringe_1 = require("tsyringe");
const CartRemoveProductUseCase_1 = require("../../../../domain/chart/useCases/CartRemoveProductUseCase");
class CartRemoveProductController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { productsId } = request.body;
            const cartRemoveProductUseCase = tsyringe_1.container.resolve(CartRemoveProductUseCase_1.CartRemoveProductUseCase);
            try {
                const cart = yield cartRemoveProductUseCase.execute({
                    id,
                    productsId,
                });
                return response.json(cart);
            }
            catch (error) {
                throw new Error(`Error on remove product into cart: ${error}`);
            }
        });
    }
}
exports.CartRemoveProductController = CartRemoveProductController;
