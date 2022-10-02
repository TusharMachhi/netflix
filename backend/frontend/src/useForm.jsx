import { useState } from "react";

const useForm = () => {
  const [data, setData] = useState({
    
    email: "",
    Pnumber: "",
    userPic: "",
    password: "",
    cpassword: "",
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

  return { data, handler };
};
export default useForm;
