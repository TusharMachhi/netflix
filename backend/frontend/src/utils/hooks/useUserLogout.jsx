import {api} from '../axiosInstance'
import {useQuery} from 'react-query'

const logout = async()=>{
    return await api.get('user/logout',{
        withCredentials: true
    })
}
export const useUserLogout = ()=>{
    return useQuery('user-logout',logout,{
        enabled:false
    })

}
