import Navbar from "./Navbar";
import AddMovies from "./AddMovies";
import { useUserStore, useMoviesStore } from "./zstand.mjs";
import Footer from "./Footer";
import { useParams, useLocation } from "react-router-dom";
import { useFetchById } from "./utils/hooks/useFetchById";
import {} from './utils/hooks/useUpdateMovies'
import Formupdate from "./Formupdate";

const Update = () => {
  
  const role = useUserStore((state) => state.user.user);
const{state}= useLocation()
  const { id } = useParams();
 
  const { data } = useFetchById(id);

  return (
    <>
      <div className="relative  min-h-screen">
        <Navbar role={role} />
        <AddMovies route={state?.route} data={data}/>
        <Footer />
      </div>
    </>
  );
};

export default Update;
