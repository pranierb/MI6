import { Request, Response } from 'express';
import { DBMethod, db, tableType } from '../utils';

export default class HeroController {
    
    async getById(req: Request, res: Response) {
        const hero = await db(DBMethod.GET, tableType.HEROES, req.params.id);

        res.send(hero);
    }

    async getAll(req: Request, res: Response) {
        const heroes = await db(DBMethod.GET, tableType.HEROES, undefined, undefined, req.query);

        res.send(heroes);
    }

    async create(req: Request, res: Response) {
        const hero = await db(DBMethod.POST, tableType.HEROES, undefined, req.body);

        res.send(hero);
    }

    async update(req: Request, res: Response) {
        const hero = await db(DBMethod.PUT, tableType.HEROES, req.params.id, req.body);

        res.send(hero);
    }

    async delete(req: Request, res: Response) {
        const hero = await db(DBMethod.DELETE, tableType.HEROES, req.params.id);

        res.send(hero);
    }

    async getByDuels(req: Request, res: Response) {
        const hero = await db(DBMethod.GET, tableType.HEROES, req.params.id, 'duels');

        res.send(hero);
    }

}