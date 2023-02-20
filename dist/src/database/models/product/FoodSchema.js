"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const foodSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: (0, uuid_1.v4)(),
    },
    title: { type: String, required: true },
    description: { type: String },
    category: [{ type: String }],
    price: {
        priceNumber: { type: String, required: true },
        newPriceDiscount: { type: String },
        installment: {
            monthInstallment: { type: Number },
            pricePerMonth: { type: String },
        },
    },
    brand: { type: String },
    rating: { type: Number },
    freight: { type: Boolean },
    stock: { type: Number, required: true },
    manufacture: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {
        mobileSrc: { type: String },
        desktopSrc: { type: String },
    },
    isPromotion: { type: Boolean, default: false },
    discountPercentage: { type: Number },
}, { timestamps: true });
foodSchema.set('toJSON', {
    transform(_, ret, __) {
        delete ret.__v;
    },
});
exports.Food = mongoose_1.default.model('Food', foodSchema);
