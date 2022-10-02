import Input from "./Input";
import Button from "./Button";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useSearch } from "./utils/hooks/useSearch";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "./zstand.mjs";

const Search = () => {
  const role = useUserStore((state) => state.user.user);
  const [search, setSearch] = useState("");

  const { data } = useSearch(role, search);

  const searchHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  return (
    <>
      <div className=" w-64  h-max absolute  top-[-10px]  ">
        <div className="flex justify-center items-center">
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
        <div className=" rounded-md">
          <ul className="text-white h-max mt-4 backdrop-blur-2xl rounded-md">
            {data?.data?.data?.map((el) => {
              return (
                <>
                  <Link to={`/watch/${el._id}`}>
                    <li
                      key={el._id}
                      className="flex my-2 p-2   items-center hover:backdrop-blur-3xl hover:bg-white/30 hover:rounded-md space-x-2"
                    >
                      <span>
                        <img
                          src={el.coverPoster}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="poster"
                        />
                      </span>
                      <span>{el.movieName}</span>
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Search;
