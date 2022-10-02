import { Navigate} from "react-router-dom"


const Protected = ({role,adminRoute,Component})=>{


   
   
    if(!role){

        return <Navigate to='/login' replace/>

    }
    if(role && !adminRoute){

       return <Navigate to ='/' replace/>
    }
    
    return <Component/>
   
}
export default Protected
