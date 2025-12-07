import React from 'react'
import ProjectCard from './CardsProjects.jsx'
import HeroSection from './HeroSection.jsx'
import TechnicalStacks from './TechnicalStacks.jsx'
import govisa from '../assets/images/govisa.png'
import dealtalk from '../assets/images/dealtalk.png'
import bibliolab from '../assets/images/bibliolab.png'
import skmarque from '../assets/images/skmarque.png'
import wfoodmart from '../assets/images/wfoodmart.png'
import wcaeb from '../assets/images/wcaeb.png'
import figmaboutique from '../assets/images/figmaboutique.png'
import figmacaeb from '../assets/images/figmacaeb.png'
import figmanetflix from '../assets/images/figmanetflix.png'
import Footer from './Footer.jsx'
import WhatIdo from './WhatIdo.jsx'
import '../index.css'

function App() {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Section Projets */}
      <section className="py-16">
       <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Mes <span className="text-purple-500">Projets</span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <ProjectCard
            title="GoVisa"
            description="Plateforme de demande de visa développée avec Next.js, TypeScript et Prisma. Fonctionnalités : authentification, paiement, IA pour extraire les données du passeport, backoffice admin. Ce projet backend m’a appris la persévérance, la gestion des erreurs TypeScript, des migrations Prisma et du workflow Git."
            image={govisa}
            link={null}
          />

          <ProjectCard
            title="DealTalk"
            description="Projet Next.js où j’ai réalisé toute l’intégration frontend à partir d’une maquette Figma très précise. Ce travail m’a permis d’améliorer mon sens du détail et d’apprendre à respecter un design system professionnel."
            image={dealtalk}
            link={null}
          />

          <ProjectCard
            title="BiblioLab"
            description="Projet React + backend où j’ai conçu des APIs REST, intégré le frontend, et déployé le tout sur Vercel. Ce projet m’a appris la patience et l’importance d’une architecture claire."
            image={bibliolab}
            link="https://biblio-lab-e767.vercel.app/"
          />

          <ProjectCard
            title="SkMarque"
            description="Projet personnel e-commerce réalisé avec WordPress et WooCommerce. J’y ai appris la configuration de plugins, la gestion de catalogue et la personnalisation de thème."
            image={skmarque}
            link="https://soulemaneecom.dclic-pk.com"
          />

          <ProjectCard
            title="FoodMart"
            description="Projet de groupe basé sur WordPress et WooCommerce. Ce projet m’a initié au travail d’équipe dans l’écosystème WordPress."
            image={wfoodmart}
            link={null}
          />

          <ProjectCard
            title="CAEB"
            description="Site vitrine pour une bibliothèque, réalisé en groupe avec WordPress. De la maquette Figma jusqu’à la construction du site complet."
            image={wcaeb}
            link={null}
          />

          <ProjectCard
            title="Amazone clone (Figma)"
            description="Maquette personnelle conçue sur Figma pour mettre en pratique l’UI/UX design et la structuration d’un e-commerce moderne."
            image={figmaboutique}
            link="https://www.figma.com/design/khBA7dvC2yv0vZgOsQWARS/Untitled?node-id=0-1&t=DEjv79BdYdEzBzYN-1"
          />

          <ProjectCard
            title="Figma CAEB"
            description="Version maquette du projet CAEB, réalisée pour travailler l’ergonomie, la cohérence visuelle et la hiérarchie dans Figma."
            image={figmacaeb}
            link="https://www.figma.com/design/NcmIGX1SPJlzofiqrfYyF8/COS--Caeb-Officiel-Site-?node-id=0-1&t=Nccy6b70hVn9HBqA-1"
          />

          <ProjectCard
            title="Netflix Clone (Figma)"
            description="Projet design personnel : reproduction de l’interface Netflix sur Figma, pour pratiquer les grilles, composants UI et interactions."
            image={figmanetflix}
            link="https://www.figma.com/design/UqubuwG8i2qEUg0kfdbxIo/NETFLIX?node-id=0-1&t=GeCCt1cZQ0FDGu1f-1"
          />

        </div>
      </section>

      {/* Section Compétences Techniques */}
      <TechnicalStacks />

      {/* Section Ce que je fais */}
      <WhatIdo />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
