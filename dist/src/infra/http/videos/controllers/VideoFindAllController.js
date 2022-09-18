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
const VideoFindAllUseCase_1 = __importDefault(require("../../../../domain/videos/useCases/VideoFindAllUseCase"));
const tsyringe_1 = require("tsyringe");
class VideoFindAllController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoFindAllUseCase = tsyringe_1.container.resolve(VideoFindAllUseCase_1.default);
            try {
                const findAllVideos = yield videoFindAllUseCase.execute();
                if (!findAllVideos) {
                    return response
                        .status(400)
                        .json({ message: 'Cannot find all videos' });
                }
                return response.status(200).json(findAllVideos);
            }
            catch (err) {
                return response.status(403).json(err);
            }
        });
    }
}
exports.default = VideoFindAllController;
