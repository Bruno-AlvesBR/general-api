"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.podcastRouter = void 0;
const express_1 = require("express");
const PodcastFindAllController_1 = __importDefault(require("../controllers/PodcastFindAllController"));
const PodcastFindByIdController_1 = __importDefault(require("../controllers/PodcastFindByIdController"));
const PodcastRegisterController_1 = __importDefault(require("../controllers/PodcastRegisterController"));
const podcastRouter = (0, express_1.Router)();
exports.podcastRouter = podcastRouter;
const podcastRegisterController = new PodcastRegisterController_1.default();
const podcastFindAllController = new PodcastFindAllController_1.default();
const podcastFindByIdController = new PodcastFindByIdController_1.default();
podcastRouter.post('/register', podcastRegisterController.index);
podcastRouter.get('/', podcastFindAllController.index);
podcastRouter.get('/:id', podcastFindByIdController.index);
