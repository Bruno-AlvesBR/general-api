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
const chart_1 = require("../../../database/models/chart");
class CartProvider {
    createCart(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cart = new chart_1.Cart(data);
                yield cart.save();
            }
            catch (error) {
                throw new Error(`Error on create cart: ${error}`);
            }
        });
    }
    addProductToCart(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findedCart = yield chart_1.Cart.findOne({ id: data === null || data === void 0 ? void 0 : data.id });
                let concatProductsIntoCart = (findedCart === null || findedCart === void 0 ? void 0 : findedCart.productsId)
                    ? [...findedCart === null || findedCart === void 0 ? void 0 : findedCart.productsId]
                    : [];
                (_a = data === null || data === void 0 ? void 0 : data.productsId) === null || _a === void 0 ? void 0 : _a.filter((product) => {
                    var _a;
                    !((_a = findedCart === null || findedCart === void 0 ? void 0 : findedCart.productsId) === null || _a === void 0 ? void 0 : _a.some((oldProduct) => oldProduct === product))
                        ? concatProductsIntoCart.push(product)
                        : null;
                });
                const cart = yield chart_1.Cart.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, { productsId: concatProductsIntoCart });
                return cart || {};
            }
            catch (error) {
                throw new Error(`An error ocurred on add product into cart: ${error}`);
            }
        });
    }
    findAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cart = yield chart_1.Cart.findOne({ id });
                const products = yield ProductSchema_1.Product.find({
                    id: cart === null || cart === void 0 ? void 0 : cart.productsId,
                }).select({
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
                });
                return products;
            }
            catch (error) {
                throw new Error(`An error ocurred on find all products into cart: ${error}`);
            }
        });
    }
    removeProductIntoCart(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findedCart = yield chart_1.Cart.findOne({ id: data === null || data === void 0 ? void 0 : data.id });
                let concatProductsIntoCart = [];
                (_a = data === null || data === void 0 ? void 0 : data.productsId) === null || _a === void 0 ? void 0 : _a.filter((product) => {
                    var _a;
                    (_a = findedCart === null || findedCart === void 0 ? void 0 : findedCart.productsId) === null || _a === void 0 ? void 0 : _a.some((oldProduct) => oldProduct !== product &&
                        concatProductsIntoCart.push(oldProduct));
                });
                const cart = yield chart_1.Cart.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, { productsId: concatProductsIntoCart });
                return cart || {};
            }
            catch (error) {
                throw new Error(`An error ocurred on remove product into cart: ${error}`);
            }
        });
    }
}
exports.CartProvider = CartProvider;
