import React,{ useRef, useState} from "react";
import { useMovieAndSeries } from "./utils/hooks/useMovieAndSeries";
import { Link } from "react-router-dom";
import Card from './Card'


const MovieAndSeries = ({ data, name, type }) => {
 
  return (
    <>
      <h1 className="text-white ml-[70px] uppercase py-2">{name}</h1>

      <div className=" text-white  w-[90%] gap-y-2 gap-x-2  m-auto grid grid-cols-5 py-4  ">

        {data?.data?.data?.map((el)=>{
          return <Card data={el} key={el._id} type={type}/>
        })}
      </div>
    </>
  );
};
export default MovieAndSeries;
