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
exports.FoodPresentation = void 0;
const FoodSchema_1 = require("../../../../providers/database/product/FoodSchema");
class FoodPresentation {
    create(_a) {
        var props = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const createProduct = new FoodSchema_1.Food({
                id: props === null || props === void 0 ? void 0 : props.id,
                title: props === null || props === void 0 ? void 0 : props.title,
                description: props === null || props === void 0 ? void 0 : props.description,
                category: props === null || props === void 0 ? void 0 : props.category,
                price: {
                    number: props === null || props === void 0 ? void 0 : props.priceNumber,
                    installment: {
                        month: props === null || props === void 0 ? void 0 : props.monthInstallment,
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
}
exports.FoodPresentation = FoodPresentation;
