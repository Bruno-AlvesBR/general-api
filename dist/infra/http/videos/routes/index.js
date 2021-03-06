"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const VideoCreateController_1 = __importDefault(require("../controllers/VideoCreateController"));
const VideoFindAllController_1 = __importDefault(require("../controllers/VideoFindAllController"));
const VideoFindByIdController_1 = __importDefault(require("../controllers/VideoFindByIdController"));
const VideoDeleteController_1 = __importDefault(require("../controllers/VideoDeleteController"));
const VideoUpdateController_1 = __importDefault(require("../controllers/VideoUpdateController"));
exports.videosRouter = (0, express_1.Router)();
const videoCreateController = new VideoCreateController_1.default();
const videoFindAllController = new VideoFindAllController_1.default();
const videoFindByIdController = new VideoFindByIdController_1.default();
const videoDeleteController = new VideoDeleteController_1.default();
const videoUpdateController = new VideoUpdateController_1.default();
exports.videosRouter.post('/create', videoCreateController.index);
exports.videosRouter.get('/', videoFindAllController.index);
exports.videosRouter.get('/:id', videoFindByIdController.index);
exports.videosRouter.delete('/:id', videoDeleteController.index);
exports.videosRouter.put('/:id', videoUpdateController.index);
