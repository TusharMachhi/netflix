import {api} from '../axiosInstance'
import {useQuery} from 'react-query'

const fetchMovies = async(type,gener)=>{
    console.log('typegener',type,gener)

    return await api.get(`/movies/${type ?'?isMovies='+type :''}${gener ? '&genres='+gener :""}`)

}

export const useMovieAndSeries = (type,gener)=>{

    return useQuery(['movie-series',type,gener],()=>fetchMovies(type,gener),{})
    

}
