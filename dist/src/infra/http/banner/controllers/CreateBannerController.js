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
exports.CreateBannerController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateBannerUseCase_1 = require("../../../../domain/banner/useCases/CreateBannerUseCase");
class CreateBannerController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const createBannerUseCase = tsyringe_1.container.resolve(CreateBannerUseCase_1.CreateBannerUseCase);
            try {
                const banner = yield createBannerUseCase.execute(data);
                return response.status(201).json(banner);
            }
            catch (error) {
                return response.status(503).json({ message: error });
            }
        });
    }
}
exports.CreateBannerController = CreateBannerController;
