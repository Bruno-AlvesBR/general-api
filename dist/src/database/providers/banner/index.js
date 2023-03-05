"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerProvider = void 0;
const banner_1 = require("../../../database/models/banner");
class BannerProvider {
    findAll({ limit, offset, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const banners = yield banner_1.Banner.find().skip(offset).limit(limit);
                return banners;
            }
            catch (error) {
                console.error(`Cannot possible find all banners: ${error}`);
                return [];
            }
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                params === null || params === void 0 ? true : delete params._id;
                const banner = new banner_1.Banner(params);
                const savedBanner = yield banner.save();
                return savedBanner;
            }
            catch (error) {
                console.error(`Cannot possible save this banner: ${error}`);
                return {};
            }
        });
    }
}
exports.BannerProvider = BannerProvider;
