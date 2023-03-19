import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'reflect-metadata';
import './database/connection';
import './database/providers/injections';

import { routes } from './infra/http/shared/routes';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
