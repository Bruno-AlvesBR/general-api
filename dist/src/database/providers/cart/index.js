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
exports.CartProvider = void 0;
const ProductSchema_1 = require("../../../database/models/product/ProductSchema");
class CartProvider {
    findAll({ ids }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = {
                    id: 1,
                    title: 1,
                    description: 1,
                    category: 1,
                    freight: 1,
                    stock: 1,
                    slug: 1,
                    manufacture: 1,
                    isPromotion: 1,
                    discountPercentage: 1,
                    images: 1,
                    price: {
                        installment: 1,
                        priceNumber: 1,
                        newPriceDiscount: 1,
                    },
                };
                if (ids) {
                    const idArray = ids.split(',');
                    const products = yield ProductSchema_1.Product.find({ id: idArray }).select(project);
                    return products;
                }
                const products = yield ProductSchema_1.Product.find().select(project);
                return products;
            }
            catch (error) {
                throw new Error(`An error ocurred on find all products into cart: ${error}`);
            }
        });
    }
}
exports.CartProvider = CartProvider;
