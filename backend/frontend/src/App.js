import Home from "./Home";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import AddMovies from "./AddMovies";
import Update from './Update'
import Watch from "./Watch";
import Protected from './utils/Protected'
import { useUserStore } from "./zstand.mjs";

const App = () => {
  const role = useUserStore((state) => state.user?.user);
  return (
    <>
      <Routes>
        <Route path="/admin" element={role==="admin"?<Admin />:<Navigate to='/login'/>} />
        <Route  path="/addmovies" element={role ==="admin"? <AddMovies />:<Navigate to='/login'/>} />
        <Route path='/update/:id' element={role ==='admin' ?<Update/> :<Navigate to='login'/>}/>

        <Route path="/:type/watch/:id" element={role?<Watch />: <Navigate to='/login'/>} />
        <Route path="/watch/:id" element={role ? <Watch /> : <Navigate to='/login'/>} />
        <Route path="/signup" element={<Register />} />

        <Route path="/login" element= {<Login/>} />
        <Route path="/" element={role? <Home/>: <Navigate to='/login'/>} />
        <Route path="/movies" element={role? <Home type="movies" />:<Navigate to='/login'/>} />
        <Route path="/series" element={role?<Home type="series" />:<Navigate to='/login'/>} />
        <Route path='*' element={<Navigate to ='/login' />}/>
      </Routes>
    </>
  );
};
export default App;

