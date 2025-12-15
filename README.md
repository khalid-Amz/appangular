# Appangular
# Application de Facturation Angular

## Description
Cette application permet de gérer des factures, des produits et des utilisateurs.  
- Les produits et utilisateurs sont stockés localement via **IndexedDB** (Dexie.js).  
- L’**administrateur** peut ajouter des produits.  
- Les utilisateurs peuvent consulter les produits et générer des factures.  
- Calcul automatique du total des factures.  

Cette application est développée avec Angular en mode standalone components, sans backend.

---

## Fonctionnalités

### Authentification
- Login avec username/password
- Rôle `admin` ou `user`
- L’admin est créé automatiquement à la première ouverture (`username: admin, password: admin`)

### Produits
- Liste des produits chargés depuis IndexedDB
- Admin peut ajouter ou supprimer des produits
- Users peuvent uniquement consulter les produits

### Factures
- Ajouter des produits à la facture
- Supprimer un produit de la facture
- Calcul automatique du total
- UI simple et intuitive

---

## Technologies utilisées
- Angular (standalone components)
- Dexie.js pour IndexedDB
- TypeScript
- HTML / CSS pour le design
- Node.js et npm pour gérer Angular

---

## Installation

1. Cloner le dépôt :


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
