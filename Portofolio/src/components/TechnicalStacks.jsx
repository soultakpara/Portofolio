import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaWordpressSimple,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export default function TechnicalStacks() {
  const stacks = [
    {
      icon: <FaReact size={40} />,
      title: "Frontend",
      items: "React.js, Next.js, Tailwind CSS, Bootstrap",
      color: "text-blue-400",
    },
    {
      icon: <FaNodeJs size={40} />,
      title: "Backend",
      items: "Node.js, Express, Prisma",
      color: "text-green-400",
    },
    {
      icon: <SiPostgresql size={40} />,
      title: "Bases de données",
      items: "PostgreSQL, MongoDB",
      color: "text-blue-500",
    },
    {
      icon: <FaDocker size={40} />,
      title: "Outils & Hébergement",
      items: "Docker, Render, Netlify, Vercel",
      color: "text-blue-300",
    },
    {
      icon: <FaWordpressSimple size={40} />,
      title: "CMS",
      items: "WordPress",
      color: "text-gray-200",
    },
    {
      icon: <FaFigma size={40} />,
      title: "Design",
      items: "Figma, Canva",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="relative bg-black text-white w-full py-24 px-6 md:px-16 overflow-hidden">
      {/* Background neon effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-blue-600/20 blur-3xl opacity-40 pointer-events-none"></div>

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 relative z-10">
        Hard <span className="text-purple-500">Skills</span>
      </h2>

      {/* Carrousel mobile / Grid desktop */}
      <div className="max-w-6xl mx-auto">
        <div className="
          flex md:grid md:grid-cols-3 gap-8 
          overflow-x-auto md:overflow-visible 
          px-2 scrollbar-hide
        ">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="
                min-w-[250px] md:min-w-0
                flex-shrink-0
                bg-white/5 p-8 rounded-xl shadow-xl 
                transition-all duration-300 
                hover:scale-105 hover:bg-white/10
                backdrop-blur-md relative group
              "
            >
              {/* Neon gradient on hover */}
              <div className="
                absolute inset-0 rounded-xl opacity-0 
                group-hover:opacity-100 transition 
                bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-xl
              "></div>

              <div className={`relative z-10 mb-4 group-hover:scale-125 transition-transform duration-300 ${stack.color}`}>
                {stack.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 relative z-10">
                {stack.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                {stack.items}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
