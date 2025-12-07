import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-20 border-t border-white/10">

      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - Vision */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Ma Vision</h3>
          <p className="leading-relaxed">
            “Le code est un outil, pas une fin.  
            Ce qui m’anime, c’est de résoudre des problèmes concrets et de créer des expériences qui font sens pour les gens.”
          </p>
        </div>

        {/* CENTER - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <div className="flex items-center gap-3 mb-3 hover:text-purple-400 transition">
            <FaEnvelope className="text-purple-400" />
            <a href="mailto:soultakparadev@gmail.com">
              soultakparadev@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 mb-3 hover:text-purple-400 transition">
            <FaWhatsapp className="text-green-400" />
            <a 
              href="https://wa.me/2290153979217" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              +229 01 53 97 92 17
            </a>
          </div>

          <div className="flex items-center gap-3 mb-3 hover:text-purple-400 transition">
            <FaLinkedin className="text-blue-500" />
            <a 
              href="https://www.linkedin.com/in/soulemane"
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/soulemane
            </a>
          </div>

          <div className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Parakou, BENIN</span>
          </div>
        </div>

        {/* RIGHT - Quick message */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Let’s Build Something</h3>
          <p className="leading-relaxed mb-4">
            Vous avez un projet, une idée ou un besoin technique ?  
            Je suis disponible pour échanger et collaborer.
          </p>

          <a
            href="mailto:takparasoulemane6@gmail.com"
            className="mt-5 border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Me Contacter
          </a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-16 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Soulémane Takpara — Tous droits réservés.
      </div>

    </footer>
  );
}
