import {api} from '../axiosInstance'
import {useQuery} from 'react-query'

const fetchMovieById=async(id)=>{
   return await api.get(`movies/byid/${id}`)


}

export const useFetchById = (id)=>{
    return useQuery(['moviebyid',id],()=>fetchMovieById(id))

}
