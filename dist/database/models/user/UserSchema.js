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
        firstName: { type: String },
        lastName: { type: String },
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
    admin: { type: Boolean },
    cep: { type: Number },
    acessToken: { type: String },
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
