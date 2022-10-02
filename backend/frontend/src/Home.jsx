import Navbar from "./Navbar";
import Featured from "./Featured";

import Slick from "./Slick";
import Loader from "./Loader";
import { useUserStore, useMoviesStore} from "./zstand.mjs";
import { useMovie } from "./utils/hooks/useMovie";
import MovieAndSeries from "./MovieAndSeries";
import { useMovieAndSeries } from "./utils/hooks/useMovieAndSeries";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListItom from "./ListItom";
import Footer from './Footer'


const Home = ({ type }) => {
  
  const [genre, setGenre] = useState();
  const role = useUserStore((state) => state.user.user);
  console.log(role)

  const mtype = useMoviesStore((state) => state.setType);
  mtype(type);
  const genere = useMoviesStore((state) => state.setGenre);
  genere(genre);


  const { moviesTen, tenseries, tenactionmovies, tenactionseries } = useMovie();

  const { data: allMovies } = useMovieAndSeries(type,genre);

  return (
    <>
      <Navbar type={type} role={role}/>
      <Featured setGenre={setGenre} type={type} />
      

      {type ? (
        <MovieAndSeries
          data={allMovies}
          type={type}
          name={type === "movies" ? "movies" : "series"}
        />
      ) : (
        <>
          <Slick data={moviesTen} name={"New 10 movies"} type={type} />
          <Slick data={tenseries} name={"New 10 series"} type={type}/>
          <Slick data={tenactionmovies} name={"New 10 action movies"} type={type} />
          <Slick data={tenactionseries} name={"New 10 action series"} type={type}/>
        </>
      )}
      <Footer/>
    </>
  );
};
export default Home;
