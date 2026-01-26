import React from "react";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import img2 from "../assets/images/img2.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white w-full min-h-[90vh] flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="space-y-6 text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Soulémane TAKPARA
            </span>
          </h1>

          <h3 className="text-purple-400 text-lg sm:text-xl font-semibold">
            Développeur Web Fullstack
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Développeur web fullstack passionné par la création d’expériences
            digitales intuitives et durables. Issu d’un parcours en sociologie,
            j’ai appris à analyser les besoins réels des utilisateurs avant de coder.
            <br /><br />
            J’allie approche humaine et technologies modernes pour concevoir des
            solutions à impact et à forte valeur ajoutée.
          </p>

          <a
            href="https://drive.google.com/file/d/1R4nh_nI9YfKMDwN2UmkkJ-2EhMMQRPu7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="
              mt-2 border border-purple-500 px-8 py-3 rounded-full
              text-purple-400 hover:bg-purple-600 hover:text-white
              transition-all duration-300
            ">
              Voir mon CV
            </button>
          </a>

          {/* SOCIAL ICONS – MOBILE */}
          <div className="flex md:hidden justify-center gap-5 pt-4">
            <SocialIcon href="https://www.linkedin.com/in/soulemane">
              <FaLinkedinIn size={22} />
            </SocialIcon>
            <SocialIcon href="https://discord.com/users/soulemanetakpara">
              <FaDiscord size={22} />
            </SocialIcon>
            <SocialIcon href="https://github.com/soultakpara">
              <FaGithub size={22} />
            </SocialIcon>
          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="relative flex justify-center">
          <img
            src={img2}
            alt="Soulémane Takpara"
            className="
              w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
              rounded-2xl object-cover shadow-xl
            "
          />

          {/* SOCIAL ICONS – DESKTOP */}
          <div className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 flex-col gap-4">
            <SocialIcon href="https://www.linkedin.com/in/soulemane">
              <FaLinkedinIn size={20} />
            </SocialIcon>
            <SocialIcon href="https://discord.com/users/soulemanetakpara">
              <FaDiscord size={20} />
            </SocialIcon>
            <SocialIcon href="https://github.com/soultakpara">
              <FaGithub size={20} />
            </SocialIcon>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ===== Reusable Social Icon ===== */
function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-white/10 p-3 rounded-full
        hover:bg-purple-600 transition
        text-white
      "
    >
      {children}
    </a>
  );
}
