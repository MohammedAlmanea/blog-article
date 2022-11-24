import express, {Request, request,Response,response} from 'express';

const del = express.Router();

del.get('/', (req:Request, res:Response) => {
    res.send('This is the delete route!');
});

export default del;