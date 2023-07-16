import { GenresResponse } from "@/genres";

const getAllGenres = async (): Promise<GenresResponse | never> => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch now playing movies");
    }
    const genres: GenresResponse = await res.json();
    return genres;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch now playing movies");
  }
};

export default getAllGenres;
