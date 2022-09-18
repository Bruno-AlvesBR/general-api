"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const videoSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        default: 'Unknow',
    },
    description: {
        type: String,
        default: 'No description yet',
    },
    file: {
        url: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
        },
        image: {
            type: String,
            required: true,
        },
    },
    rating: {
        type: Number,
    },
    duration: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Video = mongoose_1.default.model('Video', videoSchema);
