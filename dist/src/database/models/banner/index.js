"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const bannerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: true,
        default: (0, uuid_1.v4)(),
        unique: true,
    },
    url: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    category: {
        type: String,
        require: true,
        default: 'release',
    },
}, { timestamps: true });
bannerSchema.set('toJSON', {
    transform(__, ret, _) {
        ret === null || ret === void 0 ? true : delete ret._id;
        ret === null || ret === void 0 ? true : delete ret.__v;
    },
});
const Banner = (0, mongoose_1.model)('Banner', bannerSchema);
exports.Banner = Banner;
