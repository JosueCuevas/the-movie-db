import MovieList from "@/components/movieList/MovieList";
import getAllGenres from "@/utils/getGenres";
import getMovies from "@/utils/getMovies";
import React from "react";

const page = async () => {
  const movies = await getMovies({ list: "popular" });
  const { genres } = await getAllGenres();
  return (
    <main className="container mx-auto py-8">
      <h2 className="text-[28px] font-semibold mb-8">Popular</h2>
      <MovieList genres={genres} results={movies.results} />
    </main>
  );
};

export default page;
