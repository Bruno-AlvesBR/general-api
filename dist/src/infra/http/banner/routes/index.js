"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerRouter = void 0;
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const CreateBannerController_1 = require("../controllers/CreateBannerController");
const FindAllBannersController_1 = require("../controllers/FindAllBannersController");
const bannerRouter = (0, express_1.Router)();
exports.bannerRouter = bannerRouter;
const createBannerController = new CreateBannerController_1.CreateBannerController();
const findAllBannersController = new FindAllBannersController_1.FindAllBannersController();
bannerRouter.get('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: {
        limit: celebrate_1.Joi.number().greater(0).required(),
        offset: celebrate_1.Joi.number().required(),
    },
}), findAllBannersController.index);
bannerRouter.post('/create', createBannerController.index);
