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
const tsyringe_1 = require("tsyringe");
const chart_1 = __importDefault(require("../../../../database/models/chart"));
const ChartAddProductUseCase_1 = __importDefault(require("../../../../domain/chart/useCases/ChartAddProductUseCase"));
class AddChartProductController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id, productId } = request.body;
            const chartAddProductUseCase = tsyringe_1.container.resolve(ChartAddProductUseCase_1.default);
            try {
                const hasUserChart = yield (chart_1.default === null || chart_1.default === void 0 ? void 0 : chart_1.default.findOne({ userId: _id }));
                if (hasUserChart) {
                    const addedProductIntoChart = yield chartAddProductUseCase.execute({
                        userId: _id,
                        productId,
                    });
                    if (!addedProductIntoChart) {
                        return response.status(403).json({
                            message: 'Unexpected error on save product into chart',
                        });
                    }
                    return response.status(201).json(addedProductIntoChart);
                }
                return response
                    .status(403)
                    .json({ message: 'No user chart founded' });
            }
            catch (err) {
                return response.status(403).json({ message: err });
            }
        });
    }
}
exports.default = AddChartProductController;
