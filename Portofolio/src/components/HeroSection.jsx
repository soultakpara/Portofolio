import React from "react";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import img2 from "../assets/images/img2.jpg";

export default function HeroSection() {
  return (
    <section className="bg-black text-white w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* --- LEFT CONTENT --- */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Soulémane TAKPARA
            </span>
          </h1>

          <h3 className="text-purple-400 text-lg sm:text-xl font-semibold">
            Développeur Web Fullstack
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Je suis Soulémane TAKPARA, développeur web fullstack passionné par la 
            création d’expériences digitales intuitives et durables. Issu d’un parcours 
            en sociologie, j’ai appris à analyser les besoins réels des utilisateurs 
            avant de coder.
            <br /><br />
            J’allie approche humaine et technologies modernes pour concevoir des solutions 
            à impact. Chaque projet est une opportunité d’apprendre, d’innover et d’apporter 
            de la valeur.
          </p>

          <a
            href="https://drive.google.com/file/d/1R4nh_nI9YfKMDwN2UmkkJ-2EhMMQRPu7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
              VOIR MON CV
            </button>
          </a>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src={img2}
            alt="Profile"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
          />

          {/* SOCIAL ICONS – repositionnés pour mobile */}
          <div className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/soulemane"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaLinkedinIn size={20} color="white" />
            </a>

            <a
              href="https://discord.com/users/soulemanetakpara"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaDiscord size={20} color="white" />
            </a>

            <a
              href="https://github.com/soultakpara"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <FaGithub size={20} color="white" />
            </a>
          </div>

        </div>

        {/* SOCIAL ICONS – VERSION MOBILE EN BAS */}
        <div className="flex md:hidden justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/soulemane"
            target="_blank"
            className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://discord.com/users/soulemanetakpara"
            target="_blank"
            className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
          >
            <FaDiscord size={22} />
          </a>
          <a
            href="https://github.com/soultakpara"
            target="_blank"
            className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition"
          >
            <FaGithub size={22} />
          </a>
        </div>

      </div>
    </section>
  );
}
