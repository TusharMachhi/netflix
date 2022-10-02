import { useState } from "react";
import { Link } from "react-router-dom";
import { useMoviesStore } from "./zstand.mjs";

const ListItom = ({ data, index, type }) => {
 

  const [hover, setHover] = useState(false);
  const {
    coverPoster,
    description,
    duration,
    genres,
    year,
    ageLimit,
    videos,
    _id: id,
  } = data;

  const hvr = (id) => {
    if (hover && id === 0) {
      return 0;
    } else {
      return id * 256 - 18 + id * 4;
    }
  };

  return (
    <>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          left: hvr(index),
        }}
        className={`sib-1 hover:z-[999] group rounded-md 
         w-64 h-32 hover:absolute hover:-top-40 shrink-0 
        hover:w-72 hover:h-max bg-black hover:rounded-md 
         hover:shadow-[0px_0px_4px_0px_rgba(255,255,255,0.50)]`}
      >
        <Link to={`/${type ? type : "home"}/watch/${id}`}>
          <img
            src={coverPoster}
            alt="slider"
            className="w-full h-full object-cover"
          />

          {hover && (
            <>
              <video
                src={videos}
                
                controls
                autoPlay={true}
                preload={'auto'}
                loop
                className="absolute top-0 left-0  h-[180px] object-cover"
              />

              <div className=" p-4 py-6 text-sm backdrop-blur">
                <div className="text-white">
                  <span>{duration}</span>
                  <span className="border-[1px] border-slate-100/50 rounded-[1px] mx-1">
                    {`${ageLimit}+`}
                  </span>
                  <span>{year}</span>
                </div>
                <div className="text-white text-left my-2 min-h-min max-h-[180px] overflow-hidden">
                  <p>{description}</p>
                </div>
                <div className="text-white">{genres}</div>
              </div>
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default ListItom;
