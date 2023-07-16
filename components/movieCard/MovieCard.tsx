"use client";
import { Genre } from "@/genres";
import { Result } from "@/movies";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CircleProgressBar from "../circleProgressBar/CircleProgressBar";

interface Props {
  movie: Result;
  genres: Genre[];
}

const MovieCard: React.FC<Props> = ({ movie, genres }) => {
  const [movieGenres, setMovieGenres] = useState<string>("");
  useEffect(() => {
    const genresMovie = genres
      .filter((item) => movie.genre_ids.includes(item.id))
      .map((item) => item.name);
    setMovieGenres(genresMovie.join(" • "));
  }, [genres, movie]);

  return (
    <article className="max-w-[190px] rounded-[10px] bs-1">
      <Link href={`/movie/${movie.id}`}>
        <Image
          alt="Movie poster"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          width={390}
          height={560}
          className="w-auto h-auto rounded-ss-[10px] rounded-se-[10px]"
          priority
        />
      </Link>
      <div className="p-4 relative">
        <CircleProgressBar
          average={movie.vote_average * 10}
          className="absolute top-[-28px]"
        />
        <h3 className="text-[22px] font-bold leading-6 my-4">{movie.title}</h3>
        <p className="text-TMDB_Gray_2 mb-2">{`${movie.release_date}`}</p>
        <span className="text-TMDB_Blue_1">{movieGenres}</span>
      </div>
    </article>
  );
};

export default MovieCard;
