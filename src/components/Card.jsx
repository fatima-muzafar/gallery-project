import React from "react"

const Card = ({ img }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={img.urls.small}
        alt={img.alt_description}
        className="w-full h-56 object-cover"
      />

      <div className="p-3">
        <h3 className="text-white text-sm font-semibold">
          {img.alt_description || "Beautiful View"}
        </h3>

        <p className="text-gray-400 text-xs mt-1">
          Photo by {img.user.name}
        </p>
      </div>
    </div>
  )
}

export default Card