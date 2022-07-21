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
            const createProduct = new FoodSchema_1.Food({
                id: props === null || props === void 0 ? void 0 : props.id,
                title: props === null || props === void 0 ? void 0 : props.title,
                description: props === null || props === void 0 ? void 0 : props.description,
                category: props === null || props === void 0 ? void 0 : props.category,
                price: {
                    priceNumber: props === null || props === void 0 ? void 0 : props.priceNumber,
                    installment: {
                        monthInstallment: props === null || props === void 0 ? void 0 : props.monthInstallment,
                        pricePerMonth: props === null || props === void 0 ? void 0 : props.pricePerMonth,
                    },
                },
                brand: props === null || props === void 0 ? void 0 : props.brand,
                rating: props === null || props === void 0 ? void 0 : props.rating,
                freight: props === null || props === void 0 ? void 0 : props.freight,
                stock: props === null || props === void 0 ? void 0 : props.stock,
                manufacture: props === null || props === void 0 ? void 0 : props.manufacture,
                slug: props === null || props === void 0 ? void 0 : props.slug,
                image: {
                    mobileSrc: props === null || props === void 0 ? void 0 : props.mobileSrc,
                    desktopSrc: props === null || props === void 0 ? void 0 : props.desktopSrc,
                },
            });
            const saveProduct = yield createProduct.save();
            if (!createProduct) {
                throw new Error('Unexpected error ocurred!');
            }
            return saveProduct;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateFood = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.findOneAndUpdate({ id }, {
                title: data === null || data === void 0 ? void 0 : data.title,
                description: data === null || data === void 0 ? void 0 : data.description,
                category: data === null || data === void 0 ? void 0 : data.category,
                price: {
                    priceNumber: data === null || data === void 0 ? void 0 : data.priceNumber,
                    installment: {
                        monthInstallment: data === null || data === void 0 ? void 0 : data.monthInstallment,
                        pricePerMonth: data === null || data === void 0 ? void 0 : data.pricePerMonth,
                    },
                },
                brand: data === null || data === void 0 ? void 0 : data.brand,
                rating: data === null || data === void 0 ? void 0 : data.rating,
                freight: data === null || data === void 0 ? void 0 : data.freight,
                stock: data === null || data === void 0 ? void 0 : data.stock,
                manufacture: data === null || data === void 0 ? void 0 : data.manufacture,
                slug: data === null || data === void 0 ? void 0 : data.slug,
                image: {
                    mobileSrc: data === null || data === void 0 ? void 0 : data.mobileSrc,
                    desktopSrc: data === null || data === void 0 ? void 0 : data.desktopSrc,
                },
            }));
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
