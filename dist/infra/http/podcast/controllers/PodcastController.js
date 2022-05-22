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
exports.PodcastController = void 0;
const PodcastPresentation_1 = require("../presentation/PodcastPresentation");
class PodcastController {
    register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, description, members, thumbnail, url, type, duration, } = request.body;
            const podcastPresentation = new PodcastPresentation_1.PodcastPresentation();
            try {
                const createPodcast = yield podcastPresentation.register({
                    id,
                    title,
                    description,
                    members,
                    thumbnail,
                    file: {
                        url,
                        type,
                        duration,
                    },
                });
                if (!createPodcast) {
                    return response
                        .status(400)
                        .json('Cannot create a new podcast');
                }
                return response.status(200).json(createPodcast);
            }
            catch (err) {
                return response.status(401).json(err);
            }
        });
    }
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const podcastPresentation = new PodcastPresentation_1.PodcastPresentation();
            try {
                const findAllPodcasts = yield podcastPresentation.findAll();
                if (!findAllPodcasts) {
                    return response
                        .status(402)
                        .json('Cannot find all podcasts');
                }
                return response.status(200).json(findAllPodcasts);
            }
            catch (err) {
                return response.status(402).json(err);
            }
        });
    }
    findById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const podcastPresentation = new PodcastPresentation_1.PodcastPresentation();
            try {
                const findPodcast = yield podcastPresentation.findById({ id });
                if (!findPodcast) {
                    return response
                        .status(400)
                        .json('Cannot finded podcast by id on database');
                }
                return response.status(200).json(findPodcast);
            }
            catch (err) {
                return response.status(4002).json(err);
            }
        });
    }
}
exports.PodcastController = PodcastController;
