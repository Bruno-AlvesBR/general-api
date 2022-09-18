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
const PodcastFindByIdUseCase_1 = __importDefault(require("../../../../domain/podcast/useCase/PodcastFindByIdUseCase"));
class PodcastFindByIdController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const podcastFindByIdUseCase = tsyringe_1.container.resolve(PodcastFindByIdUseCase_1.default);
            try {
                const findPodcast = yield podcastFindByIdUseCase.execute(String(id));
                if (!findPodcast) {
                    return response
                        .status(403)
                        .json('Cannot finded podcast by id on database');
                }
                return response.status(200).json(findPodcast);
            }
            catch (err) {
                return response.status(400).json(err);
            }
        });
    }
}
exports.default = PodcastFindByIdController;
