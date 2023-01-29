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
const podcasts_1 = require("../../../database/models/podcasts");
class PodcastDataProvider {
    register(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPodcast = new podcasts_1.Podcast(props);
            if (!newPodcast) {
                throw new Error('An error ocurred on create a new podcast');
            }
            const savePodcast = yield newPodcast.save();
            if (!savePodcast) {
                throw new Error('cannot save this podcast on schema');
            }
            return savePodcast;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllPodcasts = yield podcasts_1.Podcast.find();
                return findAllPodcasts;
            }
            catch (err) {
                throw new Error('Cannot find all podcasts into database');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findPodcast = yield podcasts_1.Podcast.findOne({
                _id: id,
            });
            if (!findPodcast) {
                throw new Error('Cannot find podcast by id');
            }
            return findPodcast;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatePodcast = yield podcasts_1.Podcast.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, data);
            if (!updatePodcast) {
                throw new Error('Unexpected error on update this podcast');
            }
            return updatePodcast;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletePodcast = podcasts_1.Podcast.findOneAndDelete({
                _id: id,
            });
            if (!deletePodcast) {
                throw new Error('Unexpected error to delete this podcast');
            }
            return deletePodcast !== null && deletePodcast !== void 0 ? deletePodcast : {};
        });
    }
}
exports.default = PodcastDataProvider;
