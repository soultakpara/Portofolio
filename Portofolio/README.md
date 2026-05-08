# SoulDev Portfolio

Portfolio personnel de Soulémane Takpara, développé avec React, Vite et Tailwind CSS. Le site présente le profil, les projets, les compétences techniques, les services proposés et les informations de contact.

## Objectif du projet

Ce projet sert de vitrine professionnelle pour présenter :

- l'identité de Soulémane Takpara en tant que développeur web fullstack ;
- une sélection de projets web, WordPress, e-commerce et maquettes Figma ;
- les compétences techniques principales ;
- les services proposés autour du développement, des APIs, du déploiement et des bases de données ;
- les liens de contact, réseaux sociaux et CV.

## Stack technique

- React 19
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- React Icons
- Framer Motion, GSAP et HeroUI installés, mais peu ou pas utilisés dans l'interface actuelle
- ESLint pour le contrôle qualité

## Structure du projet

```text
Portofolio/
├── public/
│   ├── soulDev.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── CardsProjects.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Slide.jsx
│   │   ├── TechnicalStacks.jsx
│   │   └── WhatIdo.jsx
│   ├── App.css
│   ├── hero.ts
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Architecture applicative

Le point d'entrée est `src/main.jsx`. Il monte l'application React dans l'élément HTML `#root`, défini dans `index.html`.

Le composant principal est `src/components/App.jsx`. Il assemble les grandes sections de la page dans cet ordre :

1. `HeroSection` : introduction, photo, CV et réseaux sociaux.
2. `CardsProjects` : grille de cartes pour les projets.
3. `TechnicalStacks` : grille des compétences techniques.
4. `WhatIdo` : présentation des services proposés.
5. `Footer` : vision, contact, WhatsApp, LinkedIn et copyright.

L'application est actuellement une landing page statique. Les données des projets, des compétences et des services sont écrites directement dans les composants React.

## Composants principaux

### `HeroSection.jsx`

Affiche la section d'accueil :

- nom et titre professionnel ;
- description du profil ;
- bouton vers le CV Google Drive ;
- photo de profil importée depuis `src/assets/images/img2.jpg` ;
- liens LinkedIn, Discord et GitHub.

### `CardsProjects.jsx`

Composant réutilisable pour afficher une carte projet. Il reçoit :

- `title` : nom du projet ;
- `description` : résumé du projet ;
- `image` : image du projet ;
- `link` : URL externe, ou `null` si le projet n'a pas encore de lien public.

Sur desktop, le texte apparaît en overlay au survol de l'image. Sur mobile, le contenu reste visible directement sous l'image.

### `TechnicalStacks.jsx`

Affiche les familles de compétences :

- Frontend ;
- Backend ;
- Bases de données ;
- Outils et hébergement ;
- CMS ;
- Design.

Les icônes proviennent de `react-icons`.

### `WhatIdo.jsx`

Présente les services :

- développement fullstack ;
- intégration et APIs ;
- déploiement et DevOps ;
- bases de données et architecture.

### `Footer.jsx`

Contient la vision, les liens de contact, WhatsApp, LinkedIn, l'adresse et un bouton de contact par email.

### `Slide.jsx`

Composant de carousel de compétences. Il n'est pas utilisé dans `App.jsx` actuellement. Il peut être réintégré si l'on souhaite remplacer la grille de compétences par une animation horizontale.

## Installation

Depuis le dossier du projet :

```bash
cd Portofolio
npm install
```

## Commandes disponibles

```bash
npm run dev
```

Lance le serveur de développement Vite.

```bash
npm run build
```

Génère la version de production dans `dist/`.

```bash
npm run preview
```

Prévisualise localement le build de production.

```bash
npm run lint
```

Lance ESLint sur le projet.

## Personnaliser le contenu

### Modifier les projets

Les projets sont déclarés dans `src/components/App.jsx`. Pour ajouter un projet :

1. ajouter l'image dans `src/assets/images/` ;
2. importer l'image dans `App.jsx` ;
3. ajouter un nouveau composant `ProjectCard` dans la grille.

Exemple :

```jsx
<ProjectCard
  title="Nom du projet"
  description="Description courte du projet."
  image={imageImportee}
  link="https://exemple.com"
/>
```

### Modifier les compétences

Les compétences sont dans le tableau `stacks` de `src/components/TechnicalStacks.jsx`.

### Modifier les services

Les services sont dans le tableau `services` de `src/components/WhatIdo.jsx`.

### Modifier les contacts

Les liens de contact sont principalement dans :

- `src/components/HeroSection.jsx` pour les réseaux sociaux et le CV ;
- `src/components/Footer.jsx` pour email, WhatsApp, LinkedIn et localisation.

## Style et responsive

Le style repose surtout sur des classes Tailwind CSS directement dans les composants. L'interface utilise :

- un thème sombre ;
- des accents violet, rose et bleu ;
- des effets de hover ;
- des grilles responsives ;
- des sections adaptées aux écrans mobiles et desktop.

Le fichier `src/index.css` contient encore une partie du style par défaut généré par Vite. Il peut être nettoyé si l'on veut centraliser uniquement les styles vraiment utilisés.

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou tout hébergeur compatible avec les applications Vite.

Processus classique :

```bash
npm run build
```

Puis déployer le dossier `dist/`.

Sur Vercel, le framework peut être détecté comme Vite. Les réglages attendus sont :

- Build command : `npm run build`
- Output directory : `dist`
- Install command : `npm install`

## Points d'attention

- `src/main.jsx` importe `SpeedInsights` depuis `@vercel/speed-insights/next`, mais le composant n'est pas rendu. Pour une application React/Vite, il faudra vérifier l'intégration correcte avant de l'activer.
- `src/App.css` semble venir du template Vite et n'est pas importé par l'application actuelle.
- `src/hero.ts` exporte la configuration HeroUI, mais HeroUI n'est pas branché dans `vite.config.js`.
- Plusieurs textes affichent des caractères mal encodés dans les fichiers source. Une correction d'encodage UTF-8 améliorerait la lisibilité du code et du site.
- Les données sont codées en dur dans les composants. Pour faciliter la maintenance, on pourrait les déplacer dans des fichiers de données séparés.

## Améliorations possibles

- Corriger l'encodage des textes français.
- Nettoyer les fichiers inutilisés issus du template Vite.
- Extraire les projets, compétences et services dans des tableaux dédiés.
- Ajouter une navigation interne vers les sections.
- Ajouter des métadonnées SEO dans `index.html`.
- Activer correctement Vercel Speed Insights si le site est déployé sur Vercel.
- Ajouter une page ou section détaillée pour chaque projet important.

