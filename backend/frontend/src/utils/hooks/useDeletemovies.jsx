
import { useQuery } from 'react-query'
import {api} from '../axiosInstance'

const fetchDeleteMovies = async({queryKey})=>{
    const id = queryKey[1]
    return await api.delete(`movies/delete/${id}`)


}
export const useDeletemovies= ()=>{
    return useQuery('delete-movies',fetchDeleteMovies)

}