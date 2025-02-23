# Application de Gestion de Données Utilisateurs

Cette application React permet de gérer les données utilisateurs via une API REST.

## Fonctionnalités

- Affichage de la liste des utilisateurs
- Ajout de nouveaux utilisateurs
- Modification des utilisateurs existants
- Suppression des utilisateurs
- Recherche d'utilisateurs
- Tri des données utilisateurs

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

### `npm test`

Lance les tests en mode interactif.

### `npm run build`

Compile l'application pour la production dans le dossier `build`.

## Intégration API

Cette application se connecte à l'API JSONPlaceholder pour gérer les données utilisateurs :
- GET pour récupérer les utilisateurs
- POST pour créer un nouvel utilisateur
- PUT pour mettre à jour un utilisateur
- DELETE pour supprimer un utilisateur

## Technologies Utilisées

- React.js
- Axios pour les appels API
- React Router pour la navigation
- CSS pour le style
