import React from 'react'

function CardsProjects({ title, description, image, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"  
    >
      <div className="relative group w-full h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer">

        {/* Image */}
        <img
          src={image?.src ?? image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="
          absolute inset-0 
          bg-black/70 
          flex flex-col items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          text-white p-5
        ">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-center">{description}</p>
        </div>

      </div>
    </a>
  )
}

export default CardsProjects
