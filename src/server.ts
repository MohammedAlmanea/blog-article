import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app: express.Application = express();
const port: string = '3000';

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, function () {
  console.log(`starting app on: http://localhost:${port}`);
});
