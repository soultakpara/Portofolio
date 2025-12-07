import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaFigma, FaWordpressSimple } from "react-icons/fa";
import {  SiPostgresql   } from "react-icons/si";

export default function TechnicalStacks() {
  const stacks = [
    {
      icon: <FaReact size={40} className="text-blue-400" />,
      title: "Frontend",
      items: "React.js, Next.js, Tailwind CSS, Bootstrap",
    },
    {
      icon: <FaNodeJs size={40} className="text-green-400" />,
      title: "Backend",
      items: "Node.js, Express, Prisma",
    },
    {
      icon: <SiPostgresql size={40} className="text-blue-500" />,
      title: "Bases de données",
      items: "PostgreSQL, MongoDB",
    },
    {
      icon: <FaDocker size={40} className="text-blue-300" />,
      title: "Outils & Hébergement",
      items: "Docker, Render, Netlify, Vercel",
    },
    {
      icon: <FaWordpressSimple size={40} className="text-white" />,
      title: "CMS",
      items: "WordPress",
    },
    {
      icon: <FaFigma size={40} className="text-purple-400" />,
      title: "Design",
      items: "Figma, Canva",
    },
  ];

  return (
    <section className="bg-black text-white w-full pt-20 py-20 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Hards <span className="text-purple-500">Skills</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/5 p-8 rounded-xl hover:bg-purple-600/20 transition-all duration-300 shadow-lg"
          >
            <div className="mb-4">{stack.icon}</div>

            <h3 className="text-xl font-bold mb-2">{stack.title}</h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {stack.items}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
