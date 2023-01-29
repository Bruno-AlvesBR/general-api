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
class FakerVideoProvider {
    constructor(video = [
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
    ]) {
        this.video = video;
    }
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            return props !== null && props !== void 0 ? props : {};
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.video;
        });
    }
    findById() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.video[0];
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.video[0];
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign(Object.assign({}, this.video[0]), data);
        });
    }
}
exports.default = FakerVideoProvider;
