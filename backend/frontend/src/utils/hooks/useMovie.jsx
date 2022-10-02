import { useQuery } from "react-query";
import { api } from "../axiosInstance";

const axMoviesData = async () => {
  return await api.get("movies/?isMovies=movies&limit=10");
};
const axSeriesData = async () => {
  return await api.get("movies/?isMovies=series&limit=10");
};
const axMoviesTenAction = async () => {
  return await api.get("/movies/?isMovies=movies&genres=action&limit=10");
};
const axSeriesAction = async () => {
  return await api.get("/movies/?isMovies=series&genres=action&limit=10");
};

export const useMovie = () => {
  const { data: moviesTen } = useQuery("gettenmovies", axMoviesData, {});
  const { data: tenseries } = useQuery("gettenseries", axSeriesData, {});
  const { data: tenactionmovies } = useQuery("gettenactionmovies", axMoviesTenAction,{});
  const { data: tenactionseries } = useQuery("gettenactionseries",axSeriesAction,{});

  return {moviesTen,tenseries,tenactionmovies,tenactionseries}
};
