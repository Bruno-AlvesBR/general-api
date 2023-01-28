import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './database/connection';
import './database/providers/injections';

import { routes } from './infra/http/shared/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

routes.get('/', (_, res) => {
  return res.json({ message: 'Deu bom!' });
});

app.listen(3333, () => {
  console.log(`Server is running on port: 3333`);
});

export default app;
