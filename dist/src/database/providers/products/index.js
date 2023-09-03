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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const ProductSchema_1 = require("../../../database/models/product/ProductSchema");
const defaultProject = {
    $project: {
        _id: 0,
        id: 1,
        title: 1,
        slug: 1,
        images: 1,
        isPromotion: 1,
        discountPercentage: 1,
        category: 1,
        price: {
            priceNumber: 1,
            newPriceDiscount: 1,
            installment: {
                monthInstallment: 1,
                pricePerMonth: 1,
            },
        },
        rating: 1,
        createdAt: 1,
    },
};
class ProductDataProvider {
    findByFilters(_a) {
        var { limit, offset } = _a, filters = __rest(_a, ["limit", "offset"]);
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtersArray = Object.entries(filters);
                const verifyFilters = (filter) => String(filter).includes(',') ? filter.split(',') : [filter];
                const filtersQuery = filtersArray.map((filter) => ({
                    $in: ['$'.concat(filter[0]), verifyFilters(filter[1])],
                }));
                const products = yield ProductSchema_1.Product.aggregate([
                    { $unwind: { path: '$category' } },
                    {
                        $match: {
                            $expr: { $and: filtersQuery },
                        },
                    },
                ])
                    .skip(Number(offset))
                    .limit(Number(limit));
                return products;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAllPromotions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductSchema_1.Product.aggregate([
                    {
                        $match: {
                            isPromotion: { $eq: true },
                        },
                    },
                    defaultProject,
                ]);
                return products;
            }
            catch (_a) {
                return [];
            }
        });
    }
    findAllReleases() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductSchema_1.Product.aggregate([
                    {
                        $match: {
                            createdAt: {
                                $gte: (0, dayjs_1.default)().subtract(2, 'day').toDate(),
                            },
                        },
                    },
                    defaultProject,
                ]);
                return products;
            }
            catch (_a) {
                return [];
            }
        });
    }
    findAllByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductSchema_1.Product.aggregate([
                    { $match: { category } },
                    defaultProject,
                ]);
                return products;
            }
            catch (_a) {
                return [];
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createProduct = new ProductSchema_1.Product(data);
                const saveProduct = yield createProduct.save();
                return saveProduct;
            }
            catch (error) {
                throw new Error(`Unexpected error ocurred!: ${error}`);
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateProduct = yield ProductSchema_1.Product.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, Object.assign({}, data));
                return updateProduct || {};
            }
            catch (error) {
                throw new Error(`Cannot update product data!: ${error}`);
            }
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
