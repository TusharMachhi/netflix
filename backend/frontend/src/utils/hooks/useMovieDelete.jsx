import { useMutation,useQueryClient } from "react-query";
import { api } from "../axiosInstance";

const deleteMovies = async (id) => {
  return api.delete(`/movies/delete/${id}`,{
    withCredentials: true,
  });
};
export const useMovieDelete = () => {
    const queryClient = useQueryClient()
  return useMutation(deleteMovies,{
    
    onSuccess:()=>{
        queryClient.invalidateQueries('get-serch')


    }

  });
};
