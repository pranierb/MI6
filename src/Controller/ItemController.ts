import { Request, Response } from 'express';
import { DBMethod, db, tableType } from '../utils';

export default class itemController {

	async create(req: Request, res: Response) {
		const item = await db(DBMethod.POST, tableType.ITEMS, undefined, req.body);

		res.send(item);
	}

	async update(req: Request, res: Response) {
		const item = await db(DBMethod.PUT, tableType.ITEMS, req.params.id, req.body);

		res.send(item);
	}

	async delete(req: Request, res: Response) {
		const item = await db(DBMethod.DELETE, tableType.ITEMS, req.params.id);

		res.send(item);
	}

	async getAll(req: Request, res: Response) {
		const items = await db(DBMethod.GET, tableType.ITEMS, undefined, undefined, req.query);

		res.send(items);
	}

	async getById(req: Request, res: Response) {
		const item = await db(DBMethod.GET, tableType.ITEMS, req.params.id);

		res.send(item);
	}

}