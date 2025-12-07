import React from "react";
import { FaLinkedinIn, FaDiscord,  FaGithub } from "react-icons/fa";
import img2 from '../assets/images/img2.jpg';

export default function HeroSection() {
  return (
    <section className="bg-black text-white w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* --- LEFT CONTENT --- */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Soulémane TAKPARA
            </span>
          </h1>

          <h3 className="text-purple-400 text-xl font-semibold">
            Développeur Web Fullstack
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Je suis Soulémane TAKPARA, développeur web fullstack passionné par la création d’expériences digitales intuitives et durables.
Issu d’un parcours en sociologie, j’ai appris à écouter, comprendre et analyser les besoins réels des utilisateurs avant de coder.
Aujourd’hui, j’allie cette approche humaine à une solide maîtrise des technologies modernes pour concevoir des solutions à impact.

Curieux, rigoureux et créatif, j’aime transformer une idée en produit fonctionnel, de la maquette au déploiement.
Chaque projet est pour moi une nouvelle opportunité d’apprendre, d’innover et d’apporter de la valeur.
          </p>
         <a
            href="https://drive.google.com/file/d/1R4nh_nI9YfKMDwN2UmkkJ-2EhMMQRPu7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
          <button className="mt-5 border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
            VOIR MON CV
          </button>
          </a>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src={img2}
            alt="Profile"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />

          {/* SOCIAL ICONS */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/soulemane"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaLinkedinIn size={20} color="white" />
            </a>
            <a
              href="https://discord.com/users/soulemanetakpara"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaDiscord size={20} color= "white" />
            </a>
            <a
              href="https://github.com/soultakpara"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaGithub size={20} color= "white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
