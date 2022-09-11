import { Router } from 'express';

import AddChartProductController from '../controllers/AddChartProductController';
import FindAllChartController from '../controllers/FindAllChartController';
import NewChartController from '../controllers/NewChartController';

export const charRouter = Router();

const addChartProductController = new AddChartProductController();
const newChartController = new NewChartController();
const findAllChartController = new FindAllChartController();

charRouter.post('/add', addChartProductController.index);
charRouter.post('/create', newChartController.index);
charRouter.get('/', findAllChartController.index);
