"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const podcasts_1 = __importDefault(require("./podcasts"));
const products_1 = __importDefault(require("./products"));
const user_1 = __importDefault(require("./user"));
const videos_1 = __importDefault(require("./videos"));
const cart_1 = require("./cart");
const FakerVideoProvider_1 = __importDefault(require("./fakes/FakerVideoProvider"));
const banner_1 = require("./banner");
tsyringe_1.container.registerSingleton('PodcastDataProvider', podcasts_1.default);
tsyringe_1.container.registerSingleton('ProductDataProvider', products_1.default);
tsyringe_1.container.registerSingleton('UserDataProvider', user_1.default);
tsyringe_1.container.registerSingleton('VideoDataProvider', process.env.NODE_ENV !== 'test'
    ? videos_1.default
    : FakerVideoProvider_1.default);
tsyringe_1.container.registerSingleton('CartDataProvider', cart_1.CartProvider);
tsyringe_1.container.registerSingleton('BannerDataProvider', banner_1.BannerProvider);
