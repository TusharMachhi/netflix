import "./index.css";
import { navdata } from "./navdata";
import {
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/solid";
import {useUserLogout} from './utils/hooks/useUserLogout'
import { useUserStore } from "./zstand.mjs";

import Search from "./Search";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";


import netflix from "./netflix.png";
import profile from "./profile.jpg";
import { BsWindowSidebar } from "react-icons/bs";

const Navbar = ({ type, role }) => {
  console.log(role,type)

  
  

 const setUser= useUserStore((state)=>state.logOut)
 const userData= useUserStore((state)=>state.user)
 

 
 
  const {refetch}=useUserLogout()
  
 
  

  
  

  const [open, setOpen] = useState();
  const ref = useRef();

  const co = () => {
    
    setOpen(!open);
  };

  useEffect(() => {
    const eventHandler = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", eventHandler);
    return () => {
      window.removeEventListener("mousedown", eventHandler);
    };
  }, [open]);

  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const srollev = () => {
      {
        window.pageYOffset > 20 ? setNavDark(true) : setNavDark(false);
      }
    };

    window.addEventListener("scroll", srollev);
    return () => {
      window.removeEventListener("scroll", srollev);
    };
  }, [navDark]);

  console.log(`/${role ==='admin' ?'admin' :'mm'}`)

  return (
    <>
      <nav
        className={`text-white flex  justify-between items-center px-14 py-4 w-full fixed top-0 z-50 transition-all ${
          navDark ? " bg-black" : "bg-gradient-to-b from-[rgba(0,0,0,0.5)]"
        }`}
      >
        <div className="text-white flex ">
          <img src={netflix} alt="logo" className="h-8 w-32 object-cover" />
          <ul className="flex items-center space-x-4 ml-8">
            {navdata.map((el) => {
              return (
                <Link to={el.link} state={el.state} key={el.id}>
                  <li className="">{el.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

      {role !=='admin' && <div className="relative">
          <Search type={type} role={role}/>
        </div> } 
        

        <div className="flex items-center space-x-3">
          <Link to={`/${role ==='admin' ?'admin' :''}`} >
            
            <span>{role === "admin" && userData.userName  }</span>
          </Link>

          <img src={userData.profile} alt="profile " className="w=9 h-9 rounded-md object-cover" />

          <div className="   relative " ref={ref}>
            <ChevronDownIcon
              className=" cursor-pointer w-5 h-5 my-2 "
              onClick={co}
            />

            <ul
              className={`absolute shadow-2xl divide-slate-200 right-0 backdrop-blur-sm  rounded-md overflow-hidden p-2 transition duration-150 ease-out ${
                navDark
                  ? "bg-black border-2"
                  : "backdrop-blur-sm border-2 slate-100"
              } ${open ? "top-14" : "-top-40"}`}
            >
              <li className="group my-2 flex items-center cursor-pointer hover:backdrop-blur-3xl hover:bg-white/30  pr-2 rounded-md">
                <CogIcon className="group-hover:animate-[spin_1s_linear_1] w-6 h-6 m-2  rounded-full border-2 " />
                <span>settings</span>
              </li>
              <li className="group my-2 flex items-center cursor-pointer hover:backdrop-blur-3xl hover:bg-white/30 rounded-md"  onClick={()=>{refetch();
                setUser(null)
                 }}>
                <UserIcon className="w-6 h-6 rounded-full border-2  m-2 group-hover:animate-[ping_1s_linear_1] " /> 
                
                  logout
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
    </>
  );
};
export default Navbar;
