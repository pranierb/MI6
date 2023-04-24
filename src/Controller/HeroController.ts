import { Request, Response } from 'express';
import { DBMethod, db, tableType } from '../utils';

export default class HeroController {
    
    async getById(req: Request, res: Response) {
        const hero = await db(DBMethod.GET, tableType.HEROES, req.params.id);

        res.send(hero);
    }

}