import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import HeroController from './Controller/HeroController';
import ItemController from './Controller/ItemController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const heroController = new HeroController();
const itemController = new ItemController();

const routes = {
	"get": {
		"heroes": {
			"": heroController.getAll,
			":id": heroController.getById
		},
		"items": {
			"": itemController.getAll,
			":id": itemController.getById
		}
	}
}

const getRoutes = (key: keyof typeof routes) => {
	const constructRoutes: {
		path: string,
		method: any
	}[] = [];

	const recursiveKey = (object: object | (() => void), value = "") => {
		if (typeof object === 'object') {
			for (const [key, val] of Object.entries(object)) {
				recursiveKey(object[key as keyof typeof object], value + '/' + key);
			}
		} else {
			constructRoutes.push({
				path: value,
				method: object
			});
		}
	}

	recursiveKey(routes[key]);
	return constructRoutes;
}

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

Object.keys(routes).forEach(async (method) => {
	for (const route of getRoutes(method as keyof typeof routes)) {
		app.get(route.path, await route.method);
	}
})
