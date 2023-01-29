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
const FoodSchema_1 = require("../../../database/models/product/FoodSchema");
class ProductDataProvider {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const createProduct = new FoodSchema_1.Food(props);
            const saveProduct = yield createProduct.save();
            if (!createProduct) {
                throw new Error('Unexpected error ocurred!');
            }
            return saveProduct;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateFood = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, Object.assign({}, data)));
            if (!updateFood) {
                throw new Error('Cannot update food data');
            }
            return updateFood;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllProducts = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.find());
            if (!findAllProducts) {
                throw new Error('Unexpected error to search all products!');
            }
            return findAllProducts;
        });
    }
    findBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const findFoodBySlug = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.findOne({
                slug,
            }));
            if (!findFoodBySlug) {
                throw new Error('Cannot find product by id');
            }
            return findFoodBySlug;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findFoodById = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.findOne({
                id,
            }));
            if (!findFoodById) {
                throw new Error('Cannot find product by id');
            }
            return findFoodById;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAndDelete = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.findOneAndDelete({
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
