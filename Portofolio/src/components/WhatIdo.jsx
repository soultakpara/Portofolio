import React from "react";
import { FaCode, FaCogs, FaServer, FaCloud } from "react-icons/fa";

export default function WhatIdo() {
  const services = [
    {
      icon: <FaCode size={45} />,
      title: "Développement Fullstack",
      description:
        "Création d’applications web modernes avec React.js, Next.js et Node.js. J’assure une architecture solide, performante et une expérience utilisateur fluide.",
    },
    {
      icon: <FaCogs size={45} />,
      title: "Intégration & APIs",
      description:
        "Conception d’APIs REST, intégration frontend complète et optimisation de la communication entre les couches logiques des applications.",
    },
    {
      icon: <FaCloud size={45} />,
      title: "Déploiement & DevOps",
      description:
        "Déploiement et configuration sur Render, Netlify et Vercel afin de garantir rapidité, disponibilité et stabilité des projets.",
    },
    {
      icon: <FaServer size={45} />,
      title: "Bases de données & Architecture",
      description:
        "Gestion avancée de PostgreSQL et MongoDB, modèles optimisés, requêtes performantes et utilisation de Prisma pour une gestion typée et efficace.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">

      {/* Neon Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-blue-600/20 blur-3xl opacity-40 -z-10"></div>

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 relative z-10">
        Ce que <span className="text-purple-500">je fais</span>
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="
              group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8
              shadow-xl border border-white/10
              hover:border-purple-500/50 hover:shadow-purple-600/30
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2
              animate-fadein
            "
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon Box */}
            <div className="mb-6 p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all w-fit">
              <div className="text-purple-400 group-hover:text-purple-300 transition-all transform group-hover:scale-125 group-hover:-rotate-6">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Neon underline hover */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        ))}

      </div>

      {/* Fade-in Animation */}
      <style>
        {`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein {
            animation: fadein 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
