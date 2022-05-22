import { Router } from 'express';

import { PodcastController } from '../controllers/PodcastController';

const podcastRouter = Router();
const podcastController = new PodcastController();

podcastRouter.post('/register', podcastController.register);
podcastRouter.get('/', podcastController.findAll);
podcastRouter.get('/:id', podcastController.findById);

export { podcastRouter };
