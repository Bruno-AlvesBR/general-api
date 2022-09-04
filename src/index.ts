import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './database/connection';
import './database/providers/injections';

import { routes } from './infra/http/shared/routes';
const middlewareAuthToken = require('./infra/http/shared/middlewares/Auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewareAuthToken);
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
