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
const VideoDeleteUseCase_1 = __importDefault(require("../../../../domain/videos/useCases/VideoDeleteUseCase"));
class VideoDeleteController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const videoDeleteUseCase = tsyringe_1.container.resolve(VideoDeleteUseCase_1.default);
            try {
                const deleteVideo = yield videoDeleteUseCase.execute(id);
                if (!deleteVideo) {
                    return response
                        .status(400)
                        .json({ message: 'User cannot delete this video' });
                }
                return response.status(200).json(deleteVideo);
            }
            catch (err) {
                return response
                    .status(403)
                    .json({ message: 'Cannot find this video' });
            }
        });
    }
}
exports.default = VideoDeleteController;
