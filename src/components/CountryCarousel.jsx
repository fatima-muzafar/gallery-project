import React from "react";
import countries from "../data/countries";
import CountryCard from "./CountryCard";

const CountryCarousel = ({ setSelectedCountry }) => {
 return (
  <div className="mt-20">

    <div className="md:hidden flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
      {countries.map((country) => (
       
        <div key={country.name} className="shrink-0 snap-start">
          <CountryCard
            country={country}
            onSelect={setSelectedCountry}
          />
        </div>
      ))}
    </div>

    {/* Desktop Fan Carousel */}
    <div className="hidden md:flex justify-center items-center">
      <div className="relative flex">
        {countries.map((country, index) => {
          const center = Math.floor(countries.length / 2)
          const offset = index - center

          return (
            <div  
              key={country.name}
              style={{
                marginLeft: index === 0 ? "0" : "-95px",
                transform: `
                  rotate(${offset * 7}deg)
                  translateY(${Math.abs(offset) * 12}px)
                  scale(${1 - Math.abs(offset) * 0.09})
                `,
                zIndex:
                  countries.length - Math.abs(offset),
              }}
            >
              <div>
                <CountryCard
                  country={country}
                  onSelect={setSelectedCountry}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>

  </div>
);
};

export default CountryCarousel;