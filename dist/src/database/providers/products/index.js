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
const ProductSchema_1 = require("../../../database/models/product/ProductSchema");
class ProductDataProvider {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const createProduct = new ProductSchema_1.Product(props);
            const saveProduct = yield createProduct.save();
            if (!createProduct) {
                throw new Error('Unexpected error ocurred!');
            }
            return saveProduct;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateProduct = yield (ProductSchema_1.Product === null || ProductSchema_1.Product === void 0 ? void 0 : ProductSchema_1.Product.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, Object.assign({}, data)));
            if (!updateProduct) {
                throw new Error('Cannot update product data');
            }
            return updateProduct;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllProducts = yield (ProductSchema_1.Product === null || ProductSchema_1.Product === void 0 ? void 0 : ProductSchema_1.Product.find());
            if (!findAllProducts) {
                throw new Error('Unexpected error to search all products!');
            }
            return findAllProducts;
        });
    }
    findBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const findProductBySlug = yield (ProductSchema_1.Product === null || ProductSchema_1.Product === void 0 ? void 0 : ProductSchema_1.Product.findOne({
                slug,
            }));
            if (!findProductBySlug) {
                throw new Error('Cannot find product by id');
            }
            return findProductBySlug;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findProductById = yield (ProductSchema_1.Product === null || ProductSchema_1.Product === void 0 ? void 0 : ProductSchema_1.Product.findOne({
                id,
            }));
            if (!findProductById) {
                throw new Error('Cannot find product by id');
            }
            return findProductById;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAndDelete = yield (ProductSchema_1.Product === null || ProductSchema_1.Product === void 0 ? void 0 : ProductSchema_1.Product.findOneAndDelete({
                id,
            }));
            if (!findAndDelete) {
                throw new Error('Cannot find and delete this item');
            }
            return findAndDelete;
        });
    }
}
exports.default = ProductDataProvider;
