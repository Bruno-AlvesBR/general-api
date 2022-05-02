"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    category: [{ type: String, required: false }],
    price: {
        number: { type: Number, required: true },
        installment: {
            month: { type: Number, required: false },
            pricePerMonth: { type: Number, required: false },
        },
    },
    brand: { type: String, required: false },
    rating: { type: Number, required: false },
    freight: { type: Boolean, required: false },
    stock: { type: Number, required: true },
    manufacture: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {
        mobileSrc: { type: String, required: false },
        desktopSrc: { type: String, required: false },
    },
}, { timestamps: true });
exports.Food = mongoose_1.default.model('Food', foodSchema);
