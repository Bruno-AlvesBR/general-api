import { Router } from 'express';

import PodcastFindAllController from '../controllers/PodcastFindAllController';
import PodcastFindByIdController from '../controllers/PodcastFindByIdController';
import PodcastRegisterController from '../controllers/PodcastRegisterController';
import PodcastUpdateController from '../controllers/PodcastUpdateController';
import PodcastDeleteController from '../controllers/PodcastDeleteController';

const podcastRouter = Router();
const podcastRegisterController = new PodcastRegisterController();
const podcastFindAllController = new PodcastFindAllController();
const podcastFindByIdController = new PodcastFindByIdController();
const podcastUpdateController = new PodcastUpdateController();
const podcastDeleteController = new PodcastDeleteController();

podcastRouter.post('/register', podcastRegisterController.index);
podcastRouter.get('/', podcastFindAllController.index);
podcastRouter.get('/:id', podcastFindByIdController.index);
podcastRouter.put('/:id', podcastUpdateController.index);
podcastRouter.delete('/:id', podcastDeleteController.index);

export { podcastRouter };
