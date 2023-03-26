"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const userSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        default: (0, uuid_1.v4)(),
        required: true,
        unique: true,
    },
    name: {
        firstName: { type: String, default: 'guest' },
        lastName: { type: String, default: '9128437' },
    },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    interest: [{ type: String }],
    creditCard: [
        {
            numberCard: { type: Number },
            dateCard: { type: Number },
            codeCard: { type: Number },
        },
    ],
    admin: { type: Boolean, default: false },
    cep: { type: Number },
    acessToken: { type: String },
    cartId: {
        type: String,
        ref: 'Cart',
        unique: true,
        require: true,
    },
}, { timestamps: true });
userSchema.set('toJSON', {
    transform(_, ret) {
        ret.id = ret._id;
        delete ret.__v;
    },
});
exports.User = mongoose_1.default.model('User', userSchema);
