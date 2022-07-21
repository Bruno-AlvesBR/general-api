"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const podcasts_1 = __importDefault(require("./podcasts"));
const products_1 = __importDefault(require("./products"));
tsyringe_1.container.registerSingleton('PodcastDataProvider', podcasts_1.default);
tsyringe_1.container.registerSingleton('ProductDataProvider', products_1.default);
