import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import HeroController from './Controller/HeroController';
import ItemController from './Controller/ItemController';
import DuelController from './Controller/DuelController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const heroController = new HeroController();

const itemController = new ItemController();

const duelController = new DuelController();

const routes = {
	"get": {
		"heroes": {
			"": heroController.getAll,
			":id": heroController.getById
		},
		"items": {
			"": itemController.getAll,
			":id": itemController.getById
		},
		"duels": {
			"": duelController.getAll,
			":id": duelController.getById,
			"hero": {
				":id": duelController.getByHero,
			}
		}
	},
	"post": {
		"heroes": {
			"": heroController.create
		},
		"items": {
			"": itemController.create
		},
		"duels": {
			"": duelController.create
		}
	},
	"put": {
		"heroes": {
			":id": heroController.update
		},
		"items": {
			":id": itemController.update
		},
		"duels": {
			":id": duelController.update
		}
	},
	"delete": {
		"heroes": {
			":id": heroController.delete
		},
		"items": {
			":id": itemController.delete
		},
		"duels": {
			":id": duelController.delete
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
		switch (method) {
			case "get":
				app.get(route.path, await route.method);
				break;
			case "post":
				app.post(route.path, await route.method);
				break;
			case "put":
				app.put(route.path, await route.method);
				break;
			case "delete":
				app.delete(route.path, await route.method);
				break;
		}
				
		console.log(`⚡️[server]: Route ${method.toUpperCase()} ${route.path} is registered`);
	}
})
