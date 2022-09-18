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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
describe('Video Create Use Case - Integration tests', () => {
    const video = {
        id: 'test',
        title: 'test',
        description: 'test',
        rating: 5,
        duration: 5,
        file: {
            image: 'test',
            type: 'test',
            url: 'test',
        },
    };
    it('Should be able to create a new video', () => __awaiter(void 0, void 0, void 0, function* () {
        const { status, body } = yield (0, supertest_1.default)(app_1.default)
            .post('/videos/create')
            .set('Content-Type', 'application/json')
            .send(video);
        expect(status).toBe(201);
        expect(body === null || body === void 0 ? void 0 : body.id).toBeDefined();
        expect(body === null || body === void 0 ? void 0 : body.title).toBeDefined();
        expect(body === null || body === void 0 ? void 0 : body.description).toBeDefined();
        expect(body === null || body === void 0 ? void 0 : body.file).toBeDefined();
        expect(body === null || body === void 0 ? void 0 : body.rating).toBeDefined();
        expect(body === null || body === void 0 ? void 0 : body.duration).toBeDefined();
    }));
    it('Should not be able to create a new video', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const { body } = yield (0, supertest_1.default)(app_1.default)
            .post('/videos/create')
            .set('Content-Type', 'application/json')
            .send('');
        expect(body === null || body === void 0 ? void 0 : body.title).toBeUndefined();
        expect(body === null || body === void 0 ? void 0 : body.description).toBeUndefined();
        expect((_a = body === null || body === void 0 ? void 0 : body.file) === null || _a === void 0 ? void 0 : _a.image).toBeUndefined();
        expect((_b = body === null || body === void 0 ? void 0 : body.file) === null || _b === void 0 ? void 0 : _b.url).toBeUndefined();
        expect((_c = body === null || body === void 0 ? void 0 : body.file) === null || _c === void 0 ? void 0 : _c.type).toBeUndefined();
        expect(body === null || body === void 0 ? void 0 : body.rating).toBeUndefined();
        expect(body === null || body === void 0 ? void 0 : body.duration).toBeUndefined();
    }));
});
