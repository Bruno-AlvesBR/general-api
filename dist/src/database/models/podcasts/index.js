"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podcast = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PodcastSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    members: [{ type: String }],
    thumbnail: { type: String },
    description: { type: String },
    file: {
        url: { type: String, required: true },
        type: { type: String },
        duration: { type: Number, required: true },
    },
}, { timestamps: true });
exports.Podcast = mongoose_1.default.model('Podcast', PodcastSchema);
