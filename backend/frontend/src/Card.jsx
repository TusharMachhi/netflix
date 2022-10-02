import {Link } from 'react-router-dom'

const Card =({data,type})=>{


    return(
        <>

  <Link to={`/${type}/watch/${data._id}`}
  
  >
    <div
      className={`group min-h-min rounded-md overflow-hidden hover:scale-125 bg-black shadow-[0px_0px_4px_0px_rgba(255,255,255,0.50)] transition-all duration-75`}
      
    >
      <div className="">
      <img
        src={data.coverPoster}
        className="w-full h-32 group-hover:hidden object-cover"
        alt="logo"
      />
      <video src={data.videos} controls={true} autoPlay={true} className="w-full h-32 hidden group-hover:block object-cover"></video>

      </div>
      

      <div className="text-[12px] p-2">
        <p className="uppercase">{data.movieName}</p>
        <div className="text-white space-x-2">
          <span className="bg-red-800 rounded-xl px-1">
            {data.duration}
          </span>
          <span className="bg-red-800 rounded-xl px-1">
            {`${data.ageLimit}+`}
          </span>
          <span className="bg-red-800 rounded-xl px-1">
            {data.year}
          </span>
        </div>
      </div>
    </div>
  </Link>

        </>
    )
}
export default Card