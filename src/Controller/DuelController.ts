import { Request, Response } from 'express';
import IDuel from '../interface/Duel';
import { db, DBMethod, tableType } from '../utils';

export default class DuelController {
    async getAll(req: Request, res: Response){
        const duels = await db(DBMethod.GET, tableType.DUELS, undefined, undefined, req.query)

        res.send(duels);
    }
    
    async getById(req: Request, res: Response) {
        const duel = await db(DBMethod.GET, tableType.DUELS, req.params.id);

        res.send(duel);
    }

    async getByHero(req: Request, res: Response) {
        const duels = await db(DBMethod.GET, tableType.DUELS)
        
        const duelsOfHero = duels.filter((duel: IDuel)=> duel.champions.includes(parseInt(req.params.id)))

        res.send(duelsOfHero);
    }

    async update(req: Request, res: Response) {
        const duel = await db(DBMethod.PUT, tableType.DUELS, req.params.id, req.body);

        res.send(duel);
    }

    async delete(req: Request, res: Response) {
        const duel = await db(DBMethod.DELETE, tableType.DUELS, req.params.id);

        res.send(duel);
    }
}