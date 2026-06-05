import React, { useState } from "react";
import Buttons from "./components/Buttons";
import CountryCarousel from "./components/CountryCarousel";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white">

      {!selectedCountry ? (
        // 🟣 HOME PAGE
        <div>
        <div className="text-center pt-10">
 <h1 className="text-3xl md:text-5xl font-bold px-4">
    The World, Unfiltered
  </h1>

 <p className="text-sm md:text-lg text-gray-400 mt-3 px-4">
    Raw moments from every corner of earth
  </p>

  {/* glow line */}
  <div className="w-32 h-[2px] bg-blue-500 mx-auto mt-4 opacity-60" />
</div>

          <CountryCarousel
            setSelectedCountry={setSelectedCountry}
          />
        </div>

      ) : (
        // 🔵 GALLERY PAGE
        <Buttons
          selectedCountry={selectedCountry}
          goBack={() => setSelectedCountry(null)}
        />
      )}

    </div>
  );
};

export default App;