const CountryCard = ({ country, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(country.name)}
      className="
        relative
        w-36 h-60
sm:w-44 sm:h-72
md:w-60 md:h-96
        cursor-pointer
        rounded-3xl
        overflow-hidden
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-4
      "
    >
      <img
        src={country.image}
        alt={country.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-white/5 backdrop-blur-sm" />

      <div className="absolute bottom-6 left-6">
        <h2 className="text-3xl font-bold text-white">
          {country.name}
        </h2>
      </div>
    </div>
  );
};

export default CountryCard;