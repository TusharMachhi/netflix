
import "./index.css";

import MovieList from "./MovieList";
import {useEffect, useRef, useState} from 'react'
const Carosul = () => {
  

   const ref = useRef();
  // console.log(slref);

  // const next = (dir) => {
  //   const dis = slref.current.getBoundingClientRect().x;
   
  //   console.log(slref.current.getBoundingClientRect());

  //   if (dir === "l" && slide >0) {
  //     setSlide(slide-1)
      
     
  //     slref.current.style.transform = `translateX(${dis + 248}px)`;

      
  //   }
  //   if (dir === "r" && slide <5) {
  //     setSlide(slide+1)
  //     slref.current.style.transform = `translateX(${dis - 248}px)`;
      
  //   }
  // };
  const [leftShadow , setLeftShadow] = useState(true)
  const [rightShadow , setRightShadow]= useState(true)
  
  const scroll =(e)=>{
    console.log(e)
   
    const l=e.target.scrollLeft
    const h=e.target.scrollWidth - e.target.clientWidth
    const per =Math.floor(l/h*100)
    console.log(per)
    per === 0? setLeftShadow(true):setLeftShadow(false)
    per >98?setRightShadow(false):setRightShadow(true)
     
      
      
   

  }
    
    
    
  
     
   


  return (
    <>
      <div className="my-6 w-full overflow-visible">
        <div className=" py-4 text-slate-100">continue to watch</div>
        <div className=" relative ">
          <div className={leftShadow ? "hidden": "bg-gradient-to-r from-[#06202A] text-slate-100 z-10 w-14 h-full absolute top-0 left-0"}/>
          <div className="flex gap-4 snap-x snap-mandatory  overflow-scroll  transition-all" onScroll={scroll}>
            <MovieList/>
          </div>
          <div className= {rightShadow?"z-10 w-14 h-full absolute top-0 right-0 bg-gradient-to-l from-[#06202A]":"hidden"}/>
        </div>
      </div>
    </>
  );
};
export default Carosul;
