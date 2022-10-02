import axios from "axios";


export const api = axios.create({
  baseURL: "https://tusharnetflix.herokuapp.com",
});

const getMovies = async () => {
  const { data } = await api.get("/movies");
  return data.data;
};


const createMovies = async(formdata) => {
    try {

        console.log("formdataxios",formdata);
        
        const data=  await api.post("movies/createmovies",formdata, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        });
           return data

        
    } catch (error) {
        console.log(error)
        
    }
   
 
};

const deleteMovies = async (id) => {
  await api.delete(`/delete${id}`, { withCredentials: true });

};


const createUser = async(formdata)=>{
  console.log("formdata",formdata)
    try {

       await api.post('/user/register',formdata,{
        headers: { "Content-Type": "multipart/form-data" },
      })
      
       

    } catch (error) {
        console.log(error)
        
    }
}

const loginUser = async(data)=>{

    try {

       const ndata= await api.post('/user/login',data,{withCredentials: true})
        return ndata
        
    } catch (error) {
        
    }

}

export { getMovies, deleteMovies, createMovies,createUser ,loginUser };


