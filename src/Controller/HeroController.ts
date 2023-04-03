import { Request, Response } from 'express';

export default class HeroController {
    
    getById(req: Request, res: Response) {
        res.send('Hello World!');
    }

}