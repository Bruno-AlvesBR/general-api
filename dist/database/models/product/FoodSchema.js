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
    description: { type: String },
    category: [{ type: String }],
    price: {
        priceNumber: { type: Number, required: true },
        installment: {
            monthInstallment: { type: Number },
            pricePerMonth: { type: Number },
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
}, { timestamps: true });
exports.Food = mongoose_1.default.model('Food', foodSchema);
