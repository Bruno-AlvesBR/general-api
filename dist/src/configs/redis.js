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
exports.redis = exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const redisClient = new ioredis_1.default();
exports.redisClient = redisClient;
const redis = {
    set: (key, value) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield redisClient.set(key, value, 'EX', 600);
        }
        catch (err) {
            console.error('Error on save this content on redis');
        }
    }),
    get: (value) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const syncRedisGet = yield redisClient.get(value);
            const cacheContent = syncRedisGet
                ? JSON.parse(syncRedisGet)
                : null;
            return cacheContent;
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }),
};
exports.redis = redis;
