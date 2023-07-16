"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cast } from "@/credits";

interface Props {
  cast: Cast;
}

const CastCard: React.FC<Props> = ({ cast }) => {
  return (
    <article className="max-w-[190px] rounded-[10px] bs-1">
      <Image
        alt="Movie poster"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}`}
        width={390}
        height={560}
        className="w-auto h-auto rounded-ss-[10px] rounded-se-[10px]"
        priority
      />
      <div className="p-4 relative">
        <h3 className="text-[22px] font-bold leading-6 my-4">{cast.name}</h3>
        <p className="text-TMDB_Gray_2 mb-2">{`${cast.character}`}</p>
        <span className="text-TMDB_Blue_1">{cast.known_for_department}</span>
      </div>
    </article>
  );
};

export default CastCard;
