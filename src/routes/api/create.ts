import express, {Request, request,Response,response} from 'express';

const create = express.Router();

create.get('/', (req:Request, res:Response) => {
    res.send('This is the create route!');
});

export default create;