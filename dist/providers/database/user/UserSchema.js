"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    name: {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
    },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    interest: [{ type: String, required: false }],
    creditCard: [
        {
            numberCard: {
                type: Number,
                required: false,
            },
            dateCard: {
                type: Number,
                required: false,
            },
            codeCard: {
                type: Number,
                required: false,
            },
        },
    ],
    admin: { type: Boolean, required: false },
    cep: { type: Number, required: true },
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
