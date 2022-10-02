import { api } from "../axiosInstance";
import { useMutation } from "react-query";

const fetchUpdateMovies = async (formdata) => {
 
 return await api.put(`movies/update/${formdata.id}`,formdata.newForm,

    {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const useUpdateMovie = () => {
  return useMutation(fetchUpdateMovies);
};
