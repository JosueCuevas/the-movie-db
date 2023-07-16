import Image from "next/image";
import React from "react";
import Movies from "../movies/Movies";

const Header: React.FC = () => {
  return (
    <header className="px-4 sm:pr-16 bg-TMDB_Blue_1">
      <div className="container sm:mx-auto flex justify-between">
        <Image
          alt="Logo"
          src={"/TMDB_Logo.svg"}
          width={132}
          height={18}
          className="w-1/5 min-w-[132px] max-w-[200px]"
          priority
        />
        <Movies />
      </div>
    </header>
  );
};

export default Header;
