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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodController = void 0;
const uuid_1 = require("uuid");
const FoodSchema_1 = require("../../../../providers/database/product/FoodSchema");
const FoodPresentation_1 = require("../presentation/FoodPresentation");
class FoodController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = __rest(request.body, []);
            const foodPresentation = new FoodPresentation_1.FoodPresentation();
            try {
                const createProduct = yield foodPresentation.create(Object.assign(Object.assign({}, props), { id: (0, uuid_1.v4)() }));
                return response.status(201).json(createProduct);
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const data = __rest(request.body, []);
            const foodPresentation = new FoodPresentation_1.FoodPresentation();
            try {
                const updateFood = yield foodPresentation.udpate(id, data);
                if (!updateFood) {
                    return response
                        .status(403)
                        .json('An error ocurred on update food!');
                }
                return response.status(200).json(updateFood);
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllFoods = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.find());
            if (!findAllFoods) {
                return response
                    .status(400)
                    .json('Unexpected error to search all products!');
            }
            return response.status(200).json(findAllFoods);
        });
    }
    findBySlug(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = request.params;
            const foodPresentation = new FoodPresentation_1.FoodPresentation();
            try {
                const findFoodBySlug = yield foodPresentation.findBySlug(slug);
                if (!findFoodBySlug) {
                    return response
                        .status(403)
                        .json('An error ocurred on find a product');
                }
                return response.status(200).json(findFoodBySlug);
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const foodPresentation = new FoodPresentation_1.FoodPresentation();
            try {
                const findAndDelete = yield foodPresentation.delete(id);
                if (!findAndDelete) {
                    return response
                        .status(403)
                        .json('An error ocurred on find and delete this product');
                }
                return response
                    .status(200)
                    .json({ message: 'Sucess, item has been deleted' });
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
    count(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield (FoodSchema_1.Food === null || FoodSchema_1.Food === void 0 ? void 0 : FoodSchema_1.Food.find());
                if (!count) {
                    response
                        .status(403)
                        .json('Cannot find items list count');
                }
                return response
                    .status(200)
                    .json({ count: count === null || count === void 0 ? void 0 : count.length });
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
}
exports.FoodController = FoodController;
