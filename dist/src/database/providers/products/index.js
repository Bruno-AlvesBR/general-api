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
const dayjs_1 = __importDefault(require("dayjs"));
const ProductSchema_1 = require("../../../database/models/product/ProductSchema");
const UserSchema_1 = require("../../../database/models/user/UserSchema");
const defaultProject = {
    $project: {
        _id: 0,
        id: 1,
        title: 1,
        slug: 1,
        image: {
            mobileSrc: 1,
            desktopSrc: 1,
        },
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
    findAllProductsCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sla = yield UserSchema_1.User.aggregate([
                    { $match: { id } },
                    {
                        $lookup: {
                            let: {
                                id: '$id',
                            },
                            from: 'Products',
                            pipeline: [
                                {
                                    $match: {
                                        $expr: {
                                            $eq: ['cart.products', '$$id'],
                                        },
                                    },
                                },
                            ],
                            as: 'test',
                        },
                    },
                ]);
                return sla;
            }
            catch (error) {
                console.error(error);
                return [];
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
                const products = ProductSchema_1.Product.aggregate([
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
