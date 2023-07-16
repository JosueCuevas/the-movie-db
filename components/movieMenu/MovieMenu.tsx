import Link from "next/link";
import React from "react";

interface Props {
  handleMouseLeave: () => void;
}

const MovieMenu: React.FC<Props> = ({ handleMouseLeave }) => {
  return (
    <nav
      className="bg-white rounded-[10px] py-4 w-[136px] flex flex-col absolute right-[1rem] sm:right-[2rem] md:right-[4rem] top-[3rem] border bs-1 z-10"
      onMouseLeave={handleMouseLeave}
    >
      <Link href={"/popular"} className="px-4 py-1  hover:bg-TMDB_Gray_1">
        Popular
      </Link>
      <Link href={"/"} className="px-4 py-1  hover:bg-TMDB_Gray_1">
        Now Playing
      </Link>
      <Link href={"/upcoming"} className="px-4 py-1  hover:bg-TMDB_Gray_1">
        Upcoming
      </Link>
      <Link href={"/top-rated"} className="px-4 py-1  hover:bg-TMDB_Gray_1">
        Top Rated
      </Link>
    </nav>
  );
};

export default MovieMenu;
