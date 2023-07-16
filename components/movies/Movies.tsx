"use client";
import React, { useState } from "react";
import MovieMenu from "../movieMenu/MovieMenu";

const Movies: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
    >
      <p className="font-semibold text-white cursor-pointer sm:text-[18px] md:text-[20px] lg:text-[24px] py-4">
        Movies
      </p>
      {isMenuVisible && <MovieMenu handleMouseLeave={handleMouseLeave} />}
    </div>
  );
};

export default Movies;
