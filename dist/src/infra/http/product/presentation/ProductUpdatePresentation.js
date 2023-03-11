"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const tsyringe_1 = require("tsyringe");
const ProductUpdateUseCase_1 = __importDefault(require("../../../../domain/product/useCases/ProductUpdateUseCase"));
const priceFormat_1 = require("../../../../core/utils/priceFormat");
let ProductUpdatePresentation = class ProductUpdatePresentation {
    handle(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const productUpdateUseCase = tsyringe_1.container.resolve(ProductUpdateUseCase_1.default);
            const { price, newPriceDiscount, pricePerMonth } = (0, priceFormat_1.formatPrice)({
                price: (props === null || props === void 0 ? void 0 : props.priceNumber) || '',
                discountPercentage: props === null || props === void 0 ? void 0 : props.discountPercentage,
                installment: props === null || props === void 0 ? void 0 : props.monthInstallment,
                isPromotion: props === null || props === void 0 ? void 0 : props.isPromotion,
            });
            const updateProduct = yield productUpdateUseCase.execute(Object.assign(Object.assign({}, props), { price: {
                    priceNumber: price,
                    newPriceDiscount,
                    installment: {
                        monthInstallment: props === null || props === void 0 ? void 0 : props.monthInstallment,
                        pricePerMonth,
                    },
                } }));
            return updateProduct;
        });
    }
};
ProductUpdatePresentation = __decorate([
    (0, tsyringe_1.injectable)()
], ProductUpdatePresentation);
exports.default = ProductUpdatePresentation;
