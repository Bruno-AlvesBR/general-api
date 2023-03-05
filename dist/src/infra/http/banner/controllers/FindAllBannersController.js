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
exports.FindAllBannersController = void 0;
const tsyringe_1 = require("tsyringe");
const FindAllBannersUseCase_1 = require("../../../../domain/banner/useCases/FindAllBannersUseCase");
class FindAllBannersController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit, offset } = request.query;
            const findAllBannersUseCase = tsyringe_1.container.resolve(FindAllBannersUseCase_1.FindAllBannersUseCase);
            try {
                const banners = yield findAllBannersUseCase.execute({
                    limit: Number(limit),
                    offset: Number(offset),
                });
                return response.json(banners);
            }
            catch (error) {
                return response.status(503).json({ message: error });
            }
        });
    }
}
exports.FindAllBannersController = FindAllBannersController;
