import { useQuery } from "react-query";
import { api } from "../axiosInstance";

const fetchRandom=async()=>{

    return await api.get('/movies/random/')
   
}

export const useRandomMovie= ()=>{
    return useQuery('fetchrandom',fetchRandom)
}