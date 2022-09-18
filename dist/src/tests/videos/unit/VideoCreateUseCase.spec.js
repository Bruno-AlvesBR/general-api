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
require("reflect-metadata");
const VideoCreateUseCase_1 = __importDefault(require("../../../domain/videos/useCases/VideoCreateUseCase"));
const FakerVideoProvider_1 = __importDefault(require("../../../database/providers/fakes/FakerVideoProvider"));
let fakerVideoProvider;
let videoCreateUseCase;
describe('Video Create Use Case - Unit tests', () => {
    beforeAll(() => {
        jest.clearAllMocks();
        fakerVideoProvider = new FakerVideoProvider_1.default();
        videoCreateUseCase = new VideoCreateUseCase_1.default(fakerVideoProvider);
    });
    const video = [
        {
            id: 'video-1',
            title: 'video-1',
            description: 'video-1',
            duration: 20,
            file: {
                image: 'video-1',
                type: 'video-1',
                url: 'video-1',
            },
            rating: 5,
        },
    ];
    it('Should be able to return user after create', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const videoResponse = yield videoCreateUseCase.execute(video[0]);
        expect((_a = String(videoResponse)) === null || _a === void 0 ? void 0 : _a.length).toBeGreaterThan(0);
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.id).toBeDefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.title).toBeDefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.duration).toBeDefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.description).toBeDefined();
        expect((_b = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _b === void 0 ? void 0 : _b.image).toBeDefined();
        expect((_c = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _c === void 0 ? void 0 : _c.type).toBeDefined();
        expect((_d = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _d === void 0 ? void 0 : _d.url).toBeDefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.rating).toBeDefined();
    }));
    it('Should not be able to return user after create', () => __awaiter(void 0, void 0, void 0, function* () {
        var _e, _f, _g;
        const videoResponse = yield videoCreateUseCase.execute();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.id).toBeUndefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.title).toBeUndefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.duration).toBeUndefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.description).toBeUndefined();
        expect((_e = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _e === void 0 ? void 0 : _e.image).toBeUndefined();
        expect((_f = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _f === void 0 ? void 0 : _f.type).toBeUndefined();
        expect((_g = videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.file) === null || _g === void 0 ? void 0 : _g.url).toBeUndefined();
        expect(videoResponse === null || videoResponse === void 0 ? void 0 : videoResponse.rating).toBeUndefined();
    }));
});
