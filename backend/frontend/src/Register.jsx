import Input from "./Input";
import Button from "./Button";
import cover from "./netlog.jpg";
import useForm from "./useForm";
import { validate } from "./formError";
import { BsFillPersonFill } from "react-icons/bs";
import user from "./user1.png";
import { useState } from "react";
import { createUser } from "./utils/axiosInstance";
import {useUserMutation} from './utils/hooks/useUserMutation'
import {Link, useNavigate} from 'react-router-dom'


const Register = () => {
  const navigate= useNavigate()

  const {error,mutate,isLoading}= useUserMutation()
  

  const [data, setData] = useState({
    email: "",
    userName: "",
    Number: "",
    profile: "",
    password: "",
    confirmPassword: "",
  });

  const handler = (e) => {
    const { name, value, files } = e.target;
    

    setData((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };
 

  const className = "pl-2 w-full h-12 mb-6 rounded-md";

  const onSubmit =  (e) => {
    e.preventDefault();

    const newForm = new FormData();
    newForm.append("userName", data.userName);
    newForm.append("email", data.email);
    newForm.append("Number", data.Number);
    newForm.append("profile", data.profile);
    newForm.append("password", data.password);
    newForm.append("confirmPassword", data.confirmPassword);
    

    
      
    mutate(newForm,{
      onSuccess(data){
        
        navigate('/login')

      }
     
      
    })
    
    
  };

  return (
    <>
      <div
        className="w-[100%] h-[100vh] object-cover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] bg-cover">
          <form
            onSubmit={onSubmit}
            className="w-[40%]  bg-[rgba(0,0,0,0.7)] flex flex-col p-10 rounded-md  mx-auto "
          >
            <div className="flex justify-between items-center mb-2 relative">
              <h3 className="text-2xl  text-white">Sign Up </h3>
              <label
                htmlFor="profile"
                data="choose image"
                className="flex tooltip-1  justify-center relative items-center back rounded-full text-[-50px] text-white w-16 h-16 border-2 bg-white border-white "
              >
                <img src={user} alt="user" className=" w-full h-full " />{" "}
              </label>
              <input
                type="file"
                id="profile"
                accept="image/*"
                name="profile"
                onChange={handler}
                className=" hidden bg-blue-400"
              />
            </div>

            <Input
              type="email"
              className={className}
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handler}
            />

            <Input
              type="text"
              className={className}
              name="userName"
              placeholder="enter user name"
              value={data.userName}
              onChange={handler}
            />

            <Input
              type="number"
              className={className}
              name="Number"
              placeholder="phone Number"
              value={data.Number}
              onChange={handler}
            />
            <Input
              type="password"
              className={className}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handler}
            />
            <Input
              type="password"
              className={className}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={handler}
            />

            <Button
              disabled={isLoading}
              className={"bg-[#e50914] h-12 rounded-md text-white font-bold"}
            >
              sign up
            </Button>
           <Link to ='/login'> <small className="text-white mt-6">login</small></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
