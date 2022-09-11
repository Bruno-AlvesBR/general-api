"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charRouter = void 0;
const express_1 = require("express");
const AddChartProductController_1 = __importDefault(require("../controllers/AddChartProductController"));
const FindAllChartController_1 = __importDefault(require("../controllers/FindAllChartController"));
const NewChartController_1 = __importDefault(require("../controllers/NewChartController"));
exports.charRouter = (0, express_1.Router)();
const addChartProductController = new AddChartProductController_1.default();
const newChartController = new NewChartController_1.default();
const findAllChartController = new FindAllChartController_1.default();
exports.charRouter.post('/add', addChartProductController.index);
exports.charRouter.post('/create', newChartController.index);
exports.charRouter.get('/', findAllChartController.index);
