import create from "zustand";
import { persist } from "zustand/middleware";

const useMoviesStore = create(
  persist(
    (set) => ({
      movies: [],
      type: null,
     
      genere: null,
      byIdMovie:{},

      setbyIdMovie:(movies)=>set((state)=>({byIdMovie:state.byIdMovie =movies})),

      setAllMovies: (movie) =>
        set((state) => ({ movies: (state.movies = movie) })),

      setType: (type) => set((state) => ({ type: (state.type = type) })),

      

      setGenre: (genere) =>
        set((state) => ({ genere: (state.genere = genere) })),

      
    }),
    {
      name: "movies",
    }
  )
);

const useUserStore = create(persist(
  (set)=>({
    user:null,
    setUserData: (user) =>
    set((state) => ({ user: (state.user = user) })),

    logOut: (user) => set((state) => (state.user=user)),
    setRole: (user) => set((state)=> ({...state.user,user})),

  }),{
    name:'user'
  }

))

export { useMoviesStore,useUserStore };
