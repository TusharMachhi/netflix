import { api } from "../axiosInstance";
import { useMutation, useQuery,useQueryClient } from "react-query";

const createUser = async (formdata) => {

  return await api.post("/user/register", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const useUserMutation = () => {
  return useMutation(createUser, {});
};

const createMovies = async (formdata) => {
  
 return await api.post("/movies/createmovies", formdata, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const useMoviesMutation = () => {
  const queryClient = useQueryClient()
 
  return useMutation(createMovies,{
    onSuccess:()=>{
      queryClient.invalidateQueries('get-serch')


    }
   
  });
};

const fetchMoviesByGeners = async (type) => {
  return await api.get(`movies/random/?type=${type}`);
};

export const useMoviesByType = (type) => {
  return useQuery(["fetch-by-type", type], () => fetchMoviesByGeners(type));
};
