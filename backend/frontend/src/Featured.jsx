import iron from "./iron.jpg";
import Loader from "./Loader";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useRandomMovie } from "./utils/hooks/useRandomMovie";
import { useMoviesByType } from "./utils/hooks/useUserMutation";
import { useMoviesStore } from "./zstand.mjs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Featured = ({ type, setGenre }) => {
  const { data: randData } = useMoviesByType(type);
  

  return (
    <>
      {(type == "movies" || type == "series") && (
        <div className="absolute top-20 z-10 mx-12 p-4 space-x-1 text-white ">
          <span className=" text-xl mx-1">
            {type === "movies" ? "Movies" : "Series"}
          </span>
          <select
            className="bg-black py-1 px-3"
            name="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="" className=" px-2 py-4">
              Genre
            </option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="romantic">Romantic</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>
      )}

      <div className="w-full h-screen-85 relative">
        <img
          src={randData?.data?.data[0].coverPoster}
          alt="cover"
          className="w-full h-screen-80  object-cover object-top opacity-50 "
        />

        <div className="text-white absolute  w-[40%]  bottom-8 p-4 px-12 left-4 text-justify ">
          <p className="uppercase text-5xl bold w-full h-full overflow-hidden font-tajawal text-yellow-400">
            {randData?.data?.data[0].movieName}
          </p>
          <p className=" w-full min-h-min max-h-[185px] overflow-hidden">
            {randData?.data?.data[0].description}
          </p>
          <div className="flex gap-5 my-4">
            <Link to={`watch/${randData?.data?.data[0]._id}`}>
              <button className="shadow-2xl rounded-md  flex gap-1 text-black bg-white items-center py-2 px-6">
                <BsPlayFill className=" w-5 h-5" />
                Play
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featured;
