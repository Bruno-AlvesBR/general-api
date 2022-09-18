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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chart_1 = __importDefault(require("../../../database/models/chart"));
class ChartDataProvider {
    findAll(userId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const findAllChartProducts = yield chart_1.default.findOne({
                userId,
            });
            const productsId = [];
            (_a = findAllChartProducts === null || findAllChartProducts === void 0 ? void 0 : findAllChartProducts.productId) === null || _a === void 0 ? void 0 : _a.forEach((content) => {
                productsId.push(content);
            });
            if (!(productsId === null || productsId === void 0 ? void 0 : productsId.length)) {
                throw new Error('Cannot find products into chart');
            }
            return productsId !== null && productsId !== void 0 ? productsId : [];
        });
    }
    newChart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const newChart = new chart_1.default({ userId });
            if (!newChart) {
                throw new Error('Unexpected error on try create new chart');
            }
            const saveChart = yield newChart.save();
            if (!saveChart) {
                throw new Error('Cannot save this chart on database');
            }
            return saveChart !== null && saveChart !== void 0 ? saveChart : {};
        });
    }
    addChart({ userId, productId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const addNewProductToChart = yield chart_1.default.findOneAndUpdate({ userId }, { productId });
            if (!addNewProductToChart) {
                throw new Error('Unexpected error on add product into chart');
            }
            return addNewProductToChart !== null && addNewProductToChart !== void 0 ? addNewProductToChart : {};
        });
    }
}
exports.default = ChartDataProvider;
