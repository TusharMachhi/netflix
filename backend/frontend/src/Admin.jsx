import { useQuery } from "react-query";
import { getMovies } from "./utils/axiosInstance";
import { useUserStore } from "./zstand.mjs";
import { NavLink, Link, useLocation, Outlet } from "react-router-dom";
import { HiTrash, HiPencil } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useMovieAndSeries } from "./utils/hooks/useMovieAndSeries";
import { useSearch } from "./utils/hooks/useSearch";
import Button from "./Button";
import Navbar from "./Navbar";
import Input from "./Input";
import { useMovieDelete } from "./utils/hooks/useMovieDelete";

const Admin = () => {
  
  const role = useUserStore((state) => state.user.user);
  const [search, setSearch] = useState("");
 
  const { data } = useSearch(role, search);

  const {mutate} =useMovieDelete(data?.data?.data?._id)

  const searchHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  return (
    <>
      <div className="w-full h-screen text-white">
        <Navbar role={role}/>
        <div className="mt-20 mb-4 w-[90%] m-auto">
          <Button className=" px-2 bg-green-800 rounded-md text-white">
            <Link to="/addmovies"> Add Movies</Link>
          </Button>
          <Input
            type="search"
            className={`outline-0 rounded-full  mx-1 shadow-[0px_0px_4px_0px_rgba(255,255,255,0.50)]
             px-2 w-64 transition-all duration-500 ease-in-out bg-transparent
            `}
            autoComplete="off"
            placeholder="Search here..."
            name="search"
            value={search}
            onChange={searchHandler}
          />
        </div>
        <div className="shadow-[0px_0px_4px_0px_rgba(255,255,255,0.50)]  w-[90%] m-auto">
          <div>
            <table className=" text-left w-full m-auto table-auto overflow-hidden ">
              <thead className=" shadow-md shadow-slate-800">
                <tr>
                  <th className="p-2  ">ID</th>
                  <th className=" p-2  ">Movie Name</th>
                  <th className=" p-2 ">isMovies</th>
                  <th className="p-2 ">Genere</th>
                  <th className="p-2 ">Duration</th>
                  <th className="p-2 ">AgeLimit</th>
                  <th className="p-2 ">Years</th>
                  <th className="p-2 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((data) => {
                  return (
                    <tr key={data._id} className="shadow-md shadow-slate-800">
                      <td className="p-2">{` ${data._id}`}</td>

                      <td className="p-2">{data.movieName}</td>
                      <td className="p-2">{data.isMovies.toString()}</td>
                      <td className="p-2">{data.genres}</td>
                      <td className="p-2">{data.duration}</td>
                      <td className="p-2">{data.ageLimit}</td>
                      <td className="p-2">{data.year}</td>
                      <td className=" flex  ">
                        <Link to={`/update/${data._id}` } state={{route:'update'}}>
                          <button className="m-2 px-2 flex items-center justify-center bg-red-800 rounded-md text-white">
                            <HiPencil />
                            Edit
                          </button>
                        </Link>
                        
                          <button className="m-2 px-2 flex items-center justify-center bg-green-800 rounded-md text-white"
                          
                           onClick={()=>{
                            mutate(data._id)
                           }}>
                            <HiTrash />
                            Delete
                          </button>
                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
