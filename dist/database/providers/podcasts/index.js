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
const uuid_1 = require("uuid");
const podcasts_1 = require("../../../database/models/podcasts");
class PodcastDataProvider {
    register(_a) {
        var _b, _c, _d;
        var props = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const newPodcast = new podcasts_1.Podcast({
                id: (0, uuid_1.v4)(),
                title: props === null || props === void 0 ? void 0 : props.title,
                members: props === null || props === void 0 ? void 0 : props.members,
                thumbnail: props === null || props === void 0 ? void 0 : props.thumbnail,
                description: props === null || props === void 0 ? void 0 : props.description,
                file: {
                    url: (_b = props === null || props === void 0 ? void 0 : props.file) === null || _b === void 0 ? void 0 : _b.url,
                    type: (_c = props === null || props === void 0 ? void 0 : props.file) === null || _c === void 0 ? void 0 : _c.type,
                    duration: (_d = props === null || props === void 0 ? void 0 : props.file) === null || _d === void 0 ? void 0 : _d.duration,
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
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findPodcast = yield podcasts_1.Podcast.findOne({ id });
            if (!findPodcast) {
                throw new Error('Cannot find podcast by id');
            }
            return findPodcast;
        });
    }
}
exports.default = PodcastDataProvider;
