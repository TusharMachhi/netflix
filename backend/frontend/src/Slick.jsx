import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useState, useRef } from "react";
import ListItom from "./ListItom";
import Loader from "./Loader";

import { useMovie } from "./utils/hooks/useMovie";

const Slick = ({data,name,type}) => {




  const slideRef = useRef();

  const [slide, setSlide] = useState(0);

  const prev = (direction) => {
    let distance = slideRef.current.getBoundingClientRect().x;
    console.log('distance',distance)

    if (direction === "l" && slide > 0) { 
      setSlide(slide - 1);
      slideRef.current.style.marginLeft = `${260 + distance}px`;
    }
  };
  const next = (direction) => {
    let distance = slideRef.current.getBoundingClientRect().x;
    console.log('distance',slideRef.current.getBoundingClientRect().x)
    if (direction === "r" && slide < 6) {
      setSlide(slide + 1);
      slideRef.current.style.marginLeft = `${distance - 260}px`;
    }
  };

  return (
    <>


      <div className="relative my-2 w-full">
        <p className={`text-white p-2 uppercase ${type && 'ml-[50px]'}`}>{name}</p>
        <div
          className={`text-white absolute left-0  w-14 h-32 bg-gradient-to-r z-20 from-black`}
          onClick={() => prev("l")}
        >
          <BsChevronLeft className="w-14 h-full text-slate-300"/>
        </div>

        <div
          className={`group w-full h-32 flex gap-1 relative transition-all duration-500 ml-[50px]`}
          ref={slideRef}
        >
          
          {data?.data?.data?.map((el, id) => {
           
            return <ListItom key={el._id} data={el} index={id} type={type} />;
            
          })}
          
        </div>

        <div
          className={`z-50 text-white absolute right-0 bottom-0 w-14 h-32 bg-gradient-to-l from-black`}
          onClick={() => next("r")}
        >
          <BsChevronRight className="w-14 h-full text-slate-300"/>
        </div>
      </div>
    </>
  );
};
export default Slick;
