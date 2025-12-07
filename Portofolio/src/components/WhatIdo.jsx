import React from "react";
import { FaCode, FaCogs, FaServer, FaCloud } from "react-icons/fa";

export default function WhatIdo() {
  const services = [
    {
      icon: <FaCode size={45} />,
      title: "Développement Fullstack",
      description:
        "Je conçois des applications web robustes et scalables en combinant la puissance de Node.js, React.js et Next.js. Je structure le backend pour la performance et intègre des interfaces fluides, intuitives et modernes côté frontend.",
    },
    {
      icon: <FaCogs size={45} />,
      title: "Intégration & API",
      description:
        "De la création d’APIs REST à leur intégration complète dans des frontends dynamiques, j’assure la cohérence entre les couches techniques et l’expérience utilisateur.",
    },
    {
      icon: <FaCloud size={45} />,
      title: "Déploiement ",
      description:
        "Je gère le déploiement sur Render, Netlify et Vercel, garantissant une disponibilité  optimales.",
    },
    {
      icon: <FaServer size={45} />,
      title: "Bases de données & Architecture",
      description:
        "Maîtrise de PostgreSQL et MongoDB, avec l’usage de Prisma pour une gestion fluide et typée des données.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">

      {/* NEON BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-pink-600/10 to-blue-700/20 blur-3xl opacity-40 -z-10"></div>

      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Ce que <span className="text-purple-500">je fais</span>
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="
              group relative bg-white/5 backdrop-blur-md rounded-2xl p-8
              shadow-xl border border-white/10
              hover:border-purple-500/50 hover:shadow-purple-500/30
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2 hover:rotate-[1deg]
              animate-fadein
            "
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Icon container */}
            <div className="mb-5 p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all w-fit">
              <div className="text-purple-400 group-hover:text-purple-300 transition-all transform group-hover:scale-125 group-hover:-rotate-6">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Neon underline */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        ))}

      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein {
            animation: fadein 0.7s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
