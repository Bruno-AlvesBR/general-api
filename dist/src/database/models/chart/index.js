"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userId: {
        type: String,
        ref: 'User',
        unique: true,
        required: true,
    },
    productsId: [{ type: String, ref: 'Product' }],
});
cartSchema.set('toJSON', {
    transform(__, ret, _) {
        ret._id = ret.id;
        delete ret.__v;
    },
});
const Cart = (0, mongoose_1.model)('Cart', cartSchema);
exports.Cart = Cart;
