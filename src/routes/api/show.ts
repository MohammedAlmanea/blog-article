import express, {Request, request,Response,response} from 'express';

const show = express.Router();

show.get('/', (req:Request, res:Response) => {
    res.send('This is the show route!');
});

export default show;