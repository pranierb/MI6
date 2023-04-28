# API Routing

This is the API routing for a web application. The following routes are available:

## GET

### /heroes

- **GET /heroes**: Get all heroes
- **GET /heroes/:id**: Get hero by id

### /items

- **GET /items**: Get all items
- **GET /items/:id**: Get item by id

### /duels

- **GET /duels**: Get all duels
- **GET /duels/:id**: Get duel by id
- **GET /duels/hero/:id**: Get duels by hero id

## POST

### /heroes

- **POST /heroes**: Create a new hero

### /items

- **POST /items**: Create a new item

### /duels

- **POST /duels**: Create a new duel

## PUT

### /heroes

- **PUT /heroes/:id**: Update hero by id

### /items

- **PUT /items/:id**: Update item by id

### /duels

- **PUT /duels/:id**: Update duel by id

## DELETE

### /heroes

- **DELETE /heroes/:id**: Delete hero by id

### /items

- **DELETE /items/:id**: Delete item by id

### /duels

- **DELETE /duels/:id**: Delete duel by id

# Filtres JSON Server

Voici les filtres JSON Server que l'on peut utiliser pour les interfaces Duels, Heroes et Items:

- `?_sort=property` : trie les duels par ordre croissant de la propriété spécifiée.
- `?_sort=property&_order=desc` : trie les duels par ordre décroissant de la propriété spécifiée.
- `?property=value` : filtre les duels en fonction de la valeur de la propriété spécifiée.
- `?property_like=value` : filtre les duels en fonction de la propriété spécifiée contenant une partie de la valeur spécifiée.
- `?_start=number&_end=number` : pagine les duels en spécifiant le début et la fin de la plage.
- `?_limit=number` : limite le nombre de duels retournés à la valeur spécifiée.
- `?_page=number` : pagine les duels en spécifiant le numéro de la page.

## Exemple d'utilisation:

### Duels

- GET /duels?\_sort=date : renvoie les duels triés par ordre croissant de leur date.
- GET /duels?winnerId=1 : renvoie les duels où le joueur avec l'id 1 est le gagnant.
- GET /duels?champions_like=3 : renvoie les duels où le champion 3 a participé.
- GET /duels?\_start=0&\_end=10 : renvoie les 10 premiers duels.
- GET /duels?\_limit=5&\_page=2 : renvoie la deuxième page de 5 duels.

### Heroes

- GET /heroes?\_sort=name : renvoie les heros triés par ordre alphabétique de leur nom.
- GET /heroes?name=superman : renvoie le hero possédant comme nom "superman".
- GET /heroes?=1 : renvoie les heros possédant l'objet à l'id 1.
- GET /heroes?\_start=0&\_end=10 : renvoie les 10 premiers heros.
- GET /heroes?\_limit=5&\_page=2 : renvoie la deuxième page de 5 heros.

### Items

- GET /items?\_sort=name : renvoie les objets triés par ordre alphabétique de leur nom.
- GET /items?name=superman : renvoie l'objet possédant comme nom "kryptonite".
- GET /items?attack=20 : renvoie les objets 20 en stat d'attaque.
- GET /items?\_start=0&\_end=10 : renvoie les 10 premiers objets.
- GET /items?\_limit=5&\_page=2 : renvoie la deuxième page de 5 objets.
