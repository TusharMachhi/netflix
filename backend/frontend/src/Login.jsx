import Input from "./Input";
import Button from "./Button";
import cover from "./netlog.jpg";
import { useState, useEffect } from "react";
import useForm from "./useForm";
import { validate } from "./formError";
import { loginUser } from "./utils/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import { useUserLogin } from "./utils/hooks/useUserLogin";
import { useUserStore } from "./zstand.mjs";

const Login = () => {
  let luser = useUserStore((state) => state.setUserData);
  const navigate = useNavigate();

  const [userLdata, setuserLdata] = useState({
    userName: "",
    password: "",
  });

  const { mutateAsync } = useUserLogin();

  const handler = async (e) => {
    const { name, value } = e.target;

    setuserLdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await mutateAsync(userLdata);

    console.log(data, data.user);
    luser(data);
    navigate("/", { replace: true });
  };

  const className = "pl-2 w-full h-12 mb-6 rounded-md";

  return (
    <>
      <div
        className="w-[100%] h-[100vh]   object-cover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="w-[100%]  h-[100vh] bg-[rgba(0,0,0,0.5)] bg-cover">
          <form
            className="w-[40%]  bg-[rgba(0,0,0,0.7)] flex flex-col p-10 rounded-md  mx-auto "
            onSubmit={onSubmit}
          >
            <h3 className="text-4xl pb-4 text-white">Log In</h3>
            <Input
              onChange={handler}
              value={userLdata.userName}
              type="text"
              className={className}
              name="userName"
              placeholder="Email or phone Number"
            />

            <Input
              onChange={handler}
              value={userLdata.password}
              type="password"
              className={className}
              name="password"
              placeholder="Password"
            />

            <Button
              className={"bg-[#e50914] h-12 rounded-md text-white font-bold"}
            >
              Log In
            </Button>
            <div className="text-white flex justify-between mt-4">
              <Link to="/signup">
                {" "}
                <small>signup !</small>
              </Link>
              <Link to="/">
                {" "}
                <small>forgot password ?</small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
