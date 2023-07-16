import { Welcome } from "@/movies";

type movieList = "popular" | "upcoming" | "top_rated" | "now_playing";

interface Props {
  list: movieList;
}

const getMovies = async ({ list }: Props): Promise<Welcome | never> => {
  const url = `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.API_KEY}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch now playing movies");
    }

    const movies: Welcome = await res.json();
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch now playing movies");
  }
};

export default getMovies;
