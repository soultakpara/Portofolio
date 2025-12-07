import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaFigma, FaWordpressSimple } from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiPrisma, 
  SiMongodb, SiPostgresql, SiRender, SiVercel, SiNetlify, SiCanva 
} from "react-icons/si";

export default function TechnicalStacksCarousel() {

  const stacks = [
    { icon: <FaReact size={45} />, title: "React.js", color: "text-blue-400" },
    { icon: <SiNextdotjs size={45} />, title: "Next.js", color: "text-white" },
    { icon: <SiTailwindcss size={45} />, title: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <SiBootstrap size={45} />, title: "Bootstrap", color: "text-purple-400" },
    { icon: <FaNodeJs size={45} />, title: "Node.js", color: "text-green-400" },
    { icon: <SiPrisma size={45} />, title: "Prisma", color: "text-teal-300" },
    { icon: <SiPostgresql size={45} />, title: "PostgreSQL", color: "text-blue-500" },
    { icon: <SiMongodb size={45} />, title: "MongoDB", color: "text-green-500" },
    { icon: <FaDocker size={45} />, title: "Docker", color: "text-blue-300" },
    { icon: <SiRender size={45} />, title: "Render", color: "text-indigo-300" },
    { icon: <SiNetlify size={45} />, title: "Netlify", color: "text-cyan-300" },
    { icon: <SiVercel size={45} />, title: "Vercel", color: "text-white" },
    { icon: <FaWordpressSimple size={45} />, title: "WordPress", color: "text-white" },
    { icon: <FaFigma size={45} />, title: "Figma", color: "text-pink-400" },
    { icon: <SiCanva size={45} />, title: "Canva", color: "text-blue-400" },
  ];

  return (
   <section className="relative bg-black text-white py-20 px-6 md:px-16 w-full overflow-hidden">

  {/* NEON GRADIENT BACKGROUND (DERIÈRE TOUT) */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-purple-500/10 to-blue-700/20 blur-3xl opacity-60 -z-10"></div>

  {/* Title */}
  <h2 className="relative z-20 text-center text-4xl md:text-5xl font-semibold mb-12">
    My <span className="text-purple-500">Skills</span>
  </h2>

  {/* CAROUSEL */}
  <div className="relative z-20 overflow-x-hidden w-full py-4">
    <div className="flex gap-8 w-max px-4 animate-slide">

      {stacks.map((stack, index) => (
        <div
          key={index}
          className="w-52 h-52 rounded-xl bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center justify-center 
          shadow-lg hover:bg-white/10 transition-all duration-300 relative group"
        >
          {/* Animated Icon */}
          <div
            className={`mb-3 ${stack.color} transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300`}
          >
            {stack.icon}
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold">{stack.title}</h3>
        </div>
      ))}

    </div>
  </div>

  {/* Keyframes animation */}
  <style>
    {`
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-slide {
        animation: slide 25s linear infinite;
      }
    `}
  </style>

</section>


  );
}
