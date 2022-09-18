"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podcast = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const podcastSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: (0, uuid_1.v4)(),
    },
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
podcastSchema.set('toJSON', {
    transform(_, ret, __) {
        delete ret.__v;
    },
});
exports.Podcast = (0, mongoose_1.model)('Podcast', podcastSchema);
