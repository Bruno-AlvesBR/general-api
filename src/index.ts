import express from 'express';
import cors from 'cors';

import { routes } from './infra/http/shared/routes';
import './providers/database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
