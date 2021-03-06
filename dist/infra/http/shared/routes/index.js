"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes_1 = require("../../podcast/routes");
const routes_2 = require("../../product/routes");
const routes_3 = require("../../user/routes");
const routes_4 = require("../../videos/routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/user', routes_3.userRouter);
exports.routes.use('/product', routes_2.productRouter);
exports.routes.use('/podcasts', routes_1.podcastRouter);
exports.routes.use('/videos', routes_4.videosRouter);
