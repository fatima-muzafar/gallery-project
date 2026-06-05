import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full h-96 rounded-3xl bg-gray-900 animate-pulse overflow-hidden relative">

      {/* image placeholder */}
      <div className="w-full h-full bg-gray-800" />

      {/* bottom text placeholder */}
      <div className="absolute bottom-6 left-6 space-y-2">
        <div className="w-32 h-5 bg-gray-700 rounded"></div>
        <div className="w-20 h-4 bg-gray-800 rounded"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;