import { useParams } from "react-router-dom"
import{useFetchById} from './utils/hooks/useFetchById'
import { useUserStore } from "./zstand.mjs"
import Navbar from './Navbar'


const Watch = ()=>{

    const role = useUserStore((state)=> state.user.user)
    const {id} = useParams()

    console.log(role,"in watch")
   const{data,isLoading,isError} = useFetchById(id)
   
   
   
 

    return(
        <>
       <Navbar  role={role} />
        <div className="w-[90%] m-auto text-white mt-16">
            <div className="w-full h-screen-80">
                <video src={data?.data?.data?.videos} autoPlay={false} controls={true} className="w-full h-full object-cover"/>
            </div>
            <div className="p-2">
               <p className="text-xl">{data?.data?.data?.movieName}</p>
               <div className="my-4 space-x-2">
                <span className="bg-zinc-700 p-2 rounded-full">Duration: {data?.data?.data?.duration}</span>
                <span className="bg-zinc-700 p-2 rounded-full">AgeLimit: {data?.data?.data?.ageLimit}+</span>
                <span className="bg-zinc-700 p-2 rounded-full">Year: {data?.data?.data?.year}</span>
               </div>
                <p> {data?.data?.data?.description}</p>
                <p className="my-2 w-max bg-zinc-700  p-2 rounded-full">Generes: {data?.data?.data?.genres}</p>
            </div>
        </div>
        
        </>
    )

}
export default Watch


// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import React, { useState, useRef } from "react";
// import ListItom from "./ListItom";
// import Loader from "./Loader";
// import { useMoviesStore } from "./zstand.mjs";
// import { useMovie } from "./utils/hooks/useMovie";

// const Slick = ({data,name,type}) => {

 


//   const slideRef = useRef();

//   const [slide, setSlide] = useState(0);

//   const prev = (direction) => {
//     let distance = slideRef.current.getBoundingClientRect().x;

//     if (direction === "l" && slide > 0) {
//       setSlide(slide - 1);
//       slideRef.current.style.marginLeft = `${260 + distance}px`;
//     }
//   };
//   const next = (direction) => {
//     let distance = slideRef.current.getBoundingClientRect().x;
//     if (direction === "r" && slide < 6) {
//       setSlide(slide + 1);
//       slideRef.current.style.marginLeft = `${distance - 260}px`;
//     }
//   };

//   return (
//     <>


//       <div className="relative my-2 w-full">
//         <p className={'text-white p-2 uppercase '}>{name}</p>
//         <div
//           className={`text-white absolute left-0  w-14 h-32 bg-gradient-to-r z-20 from-black`}
//           onClick={() => prev("l")}
//         >
//           <BsChevronLeft className="w-14 h-full text-slate-300"/>
//         </div>

//         <div
//           className="group w-full h-32 flex gap-1 relative transition-all duration-500 ml-[50px]"
//           ref={slideRef}
//         >
          
//           {data?.data.data?.map((el, id) => {
            
//             return <ListItom key={el._id} data={el} index={id} />;
//           })}
          
//         </div>

//         <div
//           className= 'z-50 text-white absolute right-0 bottom-0 w-14 h-32 bg-gradient-to-l from-black'
//           onClick={() => next("r")}
//         >
//           <BsChevronRight className="w-14 h-full text-slate-300"/>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Slick;
