import React from "react";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaLinkedin 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 py-20 px-6 md:px-20 mt-20 border-t border-white/10">

      {/* NEON TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ---------- VISION ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Ma Vision</h3>
          <p className="leading-relaxed text-gray-300">
            “Le code est un outil, pas une fin.  
            Ce qui m’anime, c’est de résoudre des problèmes concrets et de créer des expériences qui ont du sens pour les gens.”
          </p>
        </div>

        {/* ---------- CONTACT ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:soultakparadev@gmail.com"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaEnvelope className="text-purple-400" />
              soultakparadev@gmail.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2290153979217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaWhatsapp className="text-green-400" />
              +229 01 53 97 92 17
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/soulemane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaLinkedin className="text-blue-500" />
              linkedin.com/in/soulemane
            </a>

            {/* Localisation */}
            <div className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaMapMarkerAlt className="text-red-500" />
              Parakou, BENIN
            </div>
          </div>
        </div>

        {/* ---------- MESSAGE SECTION ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Let’s Build Something</h3>
          <p className="leading-relaxed text-gray-300 mb-5">
            Un projet, une mission ou une idée ?  
            Je suis disponible pour collaborer et transformer vos besoins en solutions concrètes.
          </p>

          <a
            href="mailto:soultakparadev@gmail.com"
            className="inline-block border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Me Contacter
          </a>
        </div>

      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="text-center text-gray-500 text-sm mt-16 pt-6 border-t border-white/10">
        © {new Date().getFullYear()} Soulémane Takpara — Tous droits réservés.
      </div>

    </footer>
  );
}
