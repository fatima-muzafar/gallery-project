import React, { useState, useEffect } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const Buttons = ({ selectedCountry, goBack }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [query] = useState(selectedCountry || "All");

  const fetchImages = async (newPage = 1, newQuery = query) => {
    try {
      setLoading(true);

      const searchQuery =
        newQuery === "All"
          ? "travel world landscape"
          : newQuery;

      // Env variable ko yahan sahi se use kiya hai
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${newPage}&client_id=${accessKey}`
      );

      const data = await res.json();

      // Agar data.results undefined ho toh empty array [] use hoga taake crash na ho
      setImages((prev) =>
        newPage === 1 ? (data.results || []) : [...prev, ...(data.results || [])]
      );
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // first load
  useEffect(() => {
    fetchImages(1, query);
  }, []);

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (page === 1) return;
    fetchImages(page, query);
  }, [page]);

  return (
    
    <div className="px-4 py-6">

      {/* PAGE TITLE */}
      <h1 className="text-center text-3xl font-bold text-white">
        Chasing Every Horizon
      </h1>

      <p className="text-center text-gray-400 mt-2 mb-8">
        No edits. No filters. Just places.
      </p>

      {/* BACK BUTTON */}
      <div className="flex justify-center mb-6">
        <button
          onClick={goBack}
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          ← Back
        </button>
      </div>

      {/* Exploring Text */}
      <h2 className="text-center text-gray-400 text-lg mb-6">
        Exploring:
        <span className="text-blue-400 ml-2">{query}</span>
      </h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images?.map((img) => (
          <Card key={img.id} img={img} />
        ))}
      </div>
      
      {loading && images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
    </div>
  );
};


export default Buttons;