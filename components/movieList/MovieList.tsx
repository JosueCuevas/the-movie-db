"use client";
import { Genre } from "@/genres";
import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { Result } from "@/movies";

interface Props {
  results: Result[];
  genres: Genre[];
}

const MovieList: React.FC<Props> = ({ results, genres }) => {
  const [movies, setMovies] = useState<Result[]>([]);

  useEffect(() => {
    setMovies(results);
  }, [results]);

  return (
    <div className="flex gap-2 gap-y-4 flex-wrap justify-center sm:justify-evenly">
      {movies.map((movie) => (
        <MovieCard genres={genres} movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
