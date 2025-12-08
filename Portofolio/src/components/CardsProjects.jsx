import React from "react";

function CardsProjects({ title, description, image, link }) {
  const isClickable = Boolean(link);

  // Wrapper dynamic tag: <a> if click, <div> otherwise
  const Wrapper = isClickable ? "a" : "div";

  return (
    <Wrapper
      href={isClickable ? link : undefined}
      target={isClickable ? "_blank" : undefined}
      rel={isClickable ? "noopener noreferrer" : undefined}
      className={`block ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="relative group w-full h-52 sm:h-64 rounded-xl overflow-hidden shadow-lg">

        {/* Image */}
        <img
          src={image?.src ?? image}
          alt={title}
          className="
            w-full h-full object-cover 
            transition-transform duration-500 
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0 
            bg-black/70 
            flex flex-col items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            text-white p-3 sm:p-5
          "
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center px-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-center leading-relaxed px-2">
            {description}
          </p>
        </div>

      </div>
    </Wrapper>
  );
}

export default CardsProjects;
