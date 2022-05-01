import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request: Request, response: Response) => {
  return response.status(200).send('Hello World!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
