import express from 'express';
import cors from 'cors';

import { routes } from './infra/http/shared/routes';
import './databases/connection';
import 'reflect-metadata';
import './databases/injections';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
