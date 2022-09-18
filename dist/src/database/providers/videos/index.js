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
const videos_1 = require("../../../database/models/videos");
class VideoDataProvider {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const newVideo = new videos_1.Video(props);
            const saveNewVideo = yield newVideo.save();
            if (!saveNewVideo) {
                throw new Error('Cannot save this video on database');
            }
            return saveNewVideo !== null && saveNewVideo !== void 0 ? saveNewVideo : {};
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllVideos = yield videos_1.Video.find();
            if (!findAllVideos) {
                throw new Error('Unexpected error ocurred on find all videos');
            }
            return findAllVideos !== null && findAllVideos !== void 0 ? findAllVideos : [];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findVideo = yield videos_1.Video.findOne({ id });
            if (!findVideo) {
                throw new Error('Unexpected error ocurred to find video on database');
            }
            return findVideo !== null && findVideo !== void 0 ? findVideo : {};
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteVideo = yield videos_1.Video.findOneAndDelete({ id });
            if (!deleteVideo) {
                throw new Error('Cannot find and delete this video on database');
            }
            return deleteVideo;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAndUpdateVideo = yield (videos_1.Video === null || videos_1.Video === void 0 ? void 0 : videos_1.Video.findOneAndUpdate({ id: data === null || data === void 0 ? void 0 : data.id }, data));
            if (!findAndUpdateVideo) {
                throw new Error('Unexpected error on find and update this video');
            }
            return findAndUpdateVideo !== null && findAndUpdateVideo !== void 0 ? findAndUpdateVideo : {};
        });
    }
}
exports.default = VideoDataProvider;
