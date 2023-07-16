import CastCard from "@/components/castCard/CastCard";
import CircleProgressBar from "@/components/circleProgressBar/CircleProgressBar";
import { Credits } from "@/credits";
import { Movie } from "@/movies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getMovie = async (movie_id: string): Promise<Movie | never> => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const movies: Movie = await res.json();
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
};

const getCredits = async (movie_id: string): Promise<Credits | never> => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.API_KEY}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const movies: Credits = await res.json();
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
};

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const { id } = params;
  const movie = await getMovie(id);
  const credits = await getCredits(id);

  const countries = movie.production_countries.map(
    (country) => country.iso_3166_1
  );
  const genres = movie.genres.map((genre) => genre.name);
  let hours = Math.floor(movie.runtime / 60);
  let minutes = movie.runtime % 60;

  let duration = `${hours}h ${minutes}m`;

  return (
    <main>
      <section
        className="bg-no-repeat bg-cover relative sm:my-12 "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}')`,
        }}
      >
        <div className="bg-TMDB_Mask relative top-0 right-0 bottom-0 left-0 ">
          <div className="container flex flex-col sm:flex-row text-white p-12 gap-4 sm:justify-between md:items-stretch mx-auto">
            <article className="w-1/2 mx-auto sm:w-2/5 sm:mx-0">
              <Image
                alt="movie poster"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                width={300}
                height={450}
                className="w-auto h-auto rounded-[10px]"
              />
            </article>
            <article className="sm:w-3/5">
              <h1 className="text-[32px] font-bold ">
                {movie.title}{" "}
                <span className="font-normal">
                  ({`${movie.release_date}`.slice(0, 4)})
                </span>
              </h1>
              <p className=" mb-6">
                {`${movie.release_date} (${countries.join(" ")})`} &bull;{" "}
                {genres.join(", ")} &bull; {duration}
              </p>
              <div className="flex gap-4 items-center  mt-8">
                <CircleProgressBar
                  average={Math.round(movie.vote_average * 10)}
                />
                <p className="font-semibold">Vote Count: {movie.vote_count}</p>
              </div>
              <p className="text-[18px] italic  mt-8">{movie.tagline}</p>
              <h2 className="mt-8 mb-2 font-bold text-[20px]">Overview</h2>
              <p>{movie.overview}</p>
              <Link
                href={movie.homepage}
                className="mt-10 flex bg-TMDB_Blue_2 w-[120px] justify-center py-2 px-1 rounded-lg hover:text-TMDB_Blue_1"
              >
                Official Website
              </Link>
              <div className="flex gap-x-8 mt-8 flex-wrap gap-y-4">
                {credits.crew.map(
                  (credit, i) =>
                    i < 6 && (
                      <div className="flex flex-col" key={i}>
                        <p className="font-semibold leading-4 mb-2">
                          {credit?.name}
                        </p>
                        <p className="font-light">{credit?.job}</p>
                      </div>
                    )
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="font-bold text-[24px] text-center my-4">Cast</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {credits.cast.map(
            (cast, i) => i < 10 && <CastCard key={i} cast={cast} />
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
