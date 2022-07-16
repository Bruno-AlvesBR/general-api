import { Router } from 'express';

import PodcastFindAllController from '../controllers/PodcastFindAllController';
import PodcastFindByIdController from '../controllers/PodcastFindByIdController';
import PodcastRegisterController from '../controllers/PodcastRegisterController';

const podcastRouter = Router();
const podcastRegisterController = new PodcastRegisterController();
const podcastFindAllController = new PodcastFindAllController();
const podcastFindByIdController = new PodcastFindByIdController();

podcastRouter.post('/register', podcastRegisterController.index);
podcastRouter.get('/', podcastFindAllController.index);
podcastRouter.get('/:id', podcastFindByIdController.index);

export { podcastRouter };
