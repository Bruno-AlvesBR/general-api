"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: { type: String, require: true },
    slug: { type: String, require: true },
    description: { type: String },
}, { timestamps: true });
schema.set('toJSON', {
    transform(__, ret, _) {
        ret === null || ret === void 0 ? true : delete ret._id;
        ret === null || ret === void 0 ? true : delete ret.__v;
    },
});
const CategoryModel = (0, mongoose_1.model)('categories', schema);
exports.CategoryModel = CategoryModel;
