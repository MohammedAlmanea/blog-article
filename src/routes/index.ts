import express, {Request, request,Response,response} from 'express';
import del from './api/delete';
import create from './api/create';
import show from './api/show';

const routes = express.Router();

routes.get('/', (req:Request, res:Response) => {
    res.send('Welcome to the main page');
});

routes.use('/del', del);
routes.use('/show', show);
routes.use('/create', create);

export default routes;