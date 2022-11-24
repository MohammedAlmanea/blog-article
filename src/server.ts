import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import articleRoutes from './handlers/article_store';

const app: express.Application = express();
const port: string = '3000';

app.use(bodyParser.json());

app.get('/', (_req:Request,res:Response) =>{
  res.send('Welcome')
});

articleRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: http://localhost:${port}`);
});
