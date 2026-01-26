import React from "react";

function CardsProjects({ title, description, image, link }) {
  return (
    <a
      href={link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none"
    >
      <article
        className="
          relative overflow-hidden rounded-2xl
          bg-zinc-900 shadow-lg
          transition-all duration-300
          hover:shadow-purple-500/30
          hover:-translate-y-1
        "
      >
        {/* IMAGE */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={image?.src ?? image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            p-5 text-center
            md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center
            md:bg-black/80
            md:opacity-0 md:group-hover:opacity-100
            md:transition-opacity md:duration-300
          "
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {title}
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
            {description}
          </p>

          {/* CTA visible sur desktop */}
          <span
            className="
              hidden md:inline-block mt-4
              text-sm text-purple-400 font-medium
              border border-purple-500 px-4 py-2 rounded-full
              transition hover:bg-purple-600 hover:text-white
            "
          >
            Voir le projet
          </span>
        </div>
      </article>
    </a>
  );
}

export default CardsProjects;
