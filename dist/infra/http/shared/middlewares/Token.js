"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const genToken = (id) => {
    const acessToken = jsonwebtoken_1.default.sign(id, `${process.env.SECRET_JWT}`);
    return acessToken;
};
exports.genToken = genToken;
