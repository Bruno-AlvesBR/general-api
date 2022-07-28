import { Router } from 'express';

import VideoCreateController from '../controllers/VideoCreateController';
import VideoFindAllController from '../controllers/VideoFindAllController';
import VideoFindByIdController from '../controllers/VideoFindByIdController';
import VideoDeleteController from '../controllers/VideoDeleteController';
import VideoUpdateController from '../controllers/VideoUpdateController';

export const videosRouter = Router();
const videoCreateController = new VideoCreateController();
const videoFindAllController = new VideoFindAllController();
const videoFindByIdController = new VideoFindByIdController();
const videoDeleteController = new VideoDeleteController();
const videoUpdateController = new VideoUpdateController();

videosRouter.post('/create', videoCreateController.index);
videosRouter.get('/', videoFindAllController.index);
videosRouter.get('/:id', videoFindByIdController.index);
videosRouter.delete('/:id', videoDeleteController.index);
videosRouter.put('/:id', videoUpdateController.index);
