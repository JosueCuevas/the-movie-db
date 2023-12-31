import MovieList from "@/components/movieList/MovieList";
import getAllGenres from "@/utils/getGenres";
import getMovies from "@/utils/getMovies";

export default async function Home() {
  const movies = await getMovies({ list: "now_playing" });
  const { genres } = await getAllGenres();
  return (
    <main className="container mx-auto py-8">
      <h2 className="text-[28px] font-semibold mb-8">Now Playing</h2>
      <MovieList genres={genres} results={movies.results} />
    </main>
  );
}
