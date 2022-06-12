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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastPresentation = void 0;
const uuid_1 = require("uuid");
const podcasts_1 = require("../../../../providers/database/podcasts");
class PodcastPresentation {
    register(_a) {
        var _b, _c, _d, _e;
        var props = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const newPodcast = new podcasts_1.Podcast({
                id: (_b = props === null || props === void 0 ? void 0 : props.id) !== null && _b !== void 0 ? _b : (0, uuid_1.v4)(),
                title: props === null || props === void 0 ? void 0 : props.title,
                description: props === null || props === void 0 ? void 0 : props.description,
                members: props === null || props === void 0 ? void 0 : props.members,
                thumbnail: props === null || props === void 0 ? void 0 : props.thumbnail,
                file: {
                    url: (_c = props === null || props === void 0 ? void 0 : props.file) === null || _c === void 0 ? void 0 : _c.url,
                    type: (_d = props === null || props === void 0 ? void 0 : props.file) === null || _d === void 0 ? void 0 : _d.type,
                    duration: (_e = props === null || props === void 0 ? void 0 : props.file) === null || _e === void 0 ? void 0 : _e.duration,
                },
            });
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
            const findAllPodcasts = yield podcasts_1.Podcast.find();
            if (!findAllPodcasts) {
                throw new Error('An error ocurred on try find all podcasts');
            }
            return findAllPodcasts;
        });
    }
    findById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const findPodcast = yield podcasts_1.Podcast.findOne({ id });
            if (!findPodcast) {
                throw new Error('Cannot find podcast by id');
            }
            return findPodcast;
        });
    }
}
exports.PodcastPresentation = PodcastPresentation;
