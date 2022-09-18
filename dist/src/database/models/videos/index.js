"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const videoSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: (0, uuid_1.v4)(),
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
videoSchema.set('toJSON', {
    transform(_, ret, __) {
        delete ret.__v;
    },
});
exports.Video = (0, mongoose_1.model)('Video', videoSchema);
