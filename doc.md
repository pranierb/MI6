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

# Récupération d'un Héros, d'un Objet ou d'un Duel grâce à l'API

L'API fournit des routes permettant de récupérer un héros, un objet ou un duel en fonction de leur ID ou de récupérer tous les éléments. Voici les méthodes HTTP et les routes correspondantes:

- Récupérer un héros par son ID : `GET /heroes/:id`
- Récupérer tous les héros : `GET /heroes`
- Récupérer un objet par son ID : `GET /items/:id`
- Récupérer tous les objets : `GET /items`
- Récupérer un duel par son ID : `GET /duels/:id`
- Récupérer tous les duels : `GET /duels`

Pour récupérer un élément, vous devez envoyer une requête GET à la route correspondante en spécifiant l'ID de l'élément que vous souhaitez récupérer ou en ne spécifiant aucun ID pour récupérer tous les éléments.

Voici un exemple de requête GET pour récupérer un héros avec l'ID 1 :

```
GET /heroes/1
```

Dans cet exemple, nous envoyons une requête GET à la route `/heroes/1` pour récupérer le héros ayant l'ID 1.

Si la récupération de l'élément a réussi, l'API renverra un code de réponse 200 (OK) avec un corps de réponse contenant les informations de l'élément récupéré.

Si la récupération a échoué, l'API renverra un code de réponse 404 (Non trouvé) ou 500 (Erreur interne du serveur) avec un message d'erreur expliquant ce qui s'est mal passé.

Si vous souhaitez récupérer tous les éléments, vous pouvez envoyer une requête GET à la route correspondante sans spécifier d'ID. L'API renverra alors un tableau contenant tous les éléments correspondants.

C'est ainsi que vous pouvez récupérer un héros, un objet ou un duel à l'API en utilisant une requête GET.

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
- GET /heroes?id=1 : renvoie les heros possédant l'objet à l'id 1.
- GET /heroes?\_start=0&\_end=10 : renvoie les 10 premiers heros.
- GET /heroes?\_limit=5&\_page=2 : renvoie la deuxième page de 5 heros.

### Items

- GET /items?\_sort=name : renvoie les objets triés par ordre alphabétique de leur nom.
- GET /items?name=kryptonite : renvoie l'objet possédant comme nom "kryptonite".
- GET /items?attack=20 : renvoie les objets 20 en stat d'attaque.
- GET /items?\_start=0&\_end=10 : renvoie les 10 premiers objets.
- GET /items?\_limit=5&\_page=2 : renvoie la deuxième page de 5 objets.

# Ajout d'un Héros, d'un Objet ou d'un Duel grâce à l'API

L'API fournit des routes permettant d'ajouter un héros, un objet ou un duel. Voici les méthodes HTTP et les routes correspondantes:

- Ajouter un héros : `POST /heroes`
- Ajouter un objet : `POST /items`
- Ajouter un duel : `POST /duels`

Pour ajouter un élément, vous devez envoyer une requête POST contenant les données de l'élément à ajouter. Les données doivent être envoyées au format JSON dans le corps de la requête.

Voici un exemple de requête POST pour ajouter un héros :

```
POST /heroes
Content-Type: application/json

{
    "name": "Superman",
    "life": "24",
    "attack": "20",
    "defense": "10",
    "itemsId": [1,5],
}
```

Dans cet exemple, nous envoyons une requête POST à la route `/heroes` avec les données d'un nouveau héros au format JSON dans le corps de la requête.

Pour ajouter un objet ou un duel, vous devez envoyer une requête POST similaire, mais avec les données correspondantes.

Une fois la requête envoyée, l'API créera l'élément et renverra une réponse avec les informations de l'élément créé, y compris son ID.

Si la création de l'élément a réussi, l'API renverra un code de réponse 201 (Créé) avec un corps de réponse contenant les informations de l'élément créé.

Si la création a échoué, l'API renverra un code de réponse 400 (Requête incorrecte) ou 500 (Erreur interne du serveur) avec un message d'erreur expliquant ce qui s'est mal passé.

C'est ainsi que vous pouvez ajouter un héros, un objet ou un duel à l'API en utilisant une requête POST.

# Modification d'un Héros, d'un Objet ou d'un Duel grâce à l'API

L'API fournit des routes permettant de modifier un héros, un objet ou un duel en fonction de leur ID. Voici les méthodes HTTP et les routes correspondantes:

- Modifier un héros : `PUT /heroes/:id`
- Modifier un objet : `PUT /items/:id`
- Modifier un duel : `PUT /duels/:id`

Pour modifier un élément, vous devez envoyer une requête PUT à la route correspondante en spécifiant l'ID de l'élément que vous souhaitez modifier et le corps de la requête contenant les nouvelles informations de l'élément.

Voici un exemple de requête PUT pour modifier un héros avec l'ID 1 :

```
PUT /heroes/1
Content-Type: application/json

{
  "name": "NOUVEAU_NOM",
    "life": "24",
    "attack": "20",
    "defense": "10",
    "itemsId": [1,5],
}
```

Dans cet exemple, nous envoyons une requête PUT à la route `/heroes/1` pour modifier le héros ayant l'ID 1. Le corps de la requête contient les nouvelles informations que nous souhaitons mettre à jour pour le héros.

Si la modification de l'élément a réussi, l'API renverra un code de réponse 200 (OK) avec un corps de réponse contenant les informations de l'élément modifié.

Si la modification a échoué, l'API renverra un code de réponse 404 (Non trouvé) ou 500 (Erreur interne du serveur) avec un message d'erreur expliquant ce qui s'est mal passé.

C'est ainsi que vous pouvez modifier un héros, un objet ou un duel à l'API en utilisant une requête PUT.

# Suppression d'un Héros, d'un Objet ou d'un Duel grâce à l'API

L'API fournit des routes permettant de supprimer un héros, un objet ou un duel. Voici les méthodes HTTP et les routes correspondantes:

- Supprimer un héros : `DELETE /heroes/:id`
- Supprimer un objet : `DELETE /items/:id`
- Supprimer un duel : `DELETE /duels/:id`

Pour supprimer un élément, vous devez envoyer une requête DELETE à la route correspondante en spécifiant l'ID de l'élément que vous souhaitez supprimer.

Voici un exemple de requête DELETE pour supprimer un héros avec l'ID 1 :

```
DELETE /heroes/1
```

Dans cet exemple, nous envoyons une requête DELETE à la route `/heroes/1` pour supprimer le héros ayant l'ID 1.

Si la suppression de l'élément a réussi, l'API renverra un code de réponse 200 (OK) sans corps de réponse.

Si la suppression a échoué, l'API renverra un code de réponse 400 (Requête incorrecte) ou 500 (Erreur interne du serveur) avec un message d'erreur expliquant ce qui s'est mal passé.

C'est ainsi que vous pouvez supprimer un héros, un objet ou un duel à l'API en utilisant une requête DELETE.
