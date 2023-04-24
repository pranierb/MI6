import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import HeroController from './Controller/HeroController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const heroController = new HeroController();

const routes = {
	"get": {
		"heroes": {
			":id": heroController.getById,
			"": heroController.getAll,
			"duels": heroController.getByDuels,
		},
	},
	"post": {
		"heroes": {
			"": heroController.create
		}
	},
	"put": {
		"heroes": {
			":id": heroController.update
		},
	},
	"delete": {
		"heroes": {
			":id": heroController.delete
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
