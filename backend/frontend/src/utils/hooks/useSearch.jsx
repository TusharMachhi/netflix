import { api } from "../axiosInstance";
import { useQuery } from "react-query";

const fetchSerch = async ({ queryKey }) => {
  console.log(queryKey)
  const role = queryKey[1];
  const keyword=queryKey[2];
  return await api.get(
    `/movies/?movieName[regex]=${keyword}&movieName[options]=i`
  );
};
export const useSearch = (role,keyword) => {
  

  return useQuery(["get-serch", role,keyword], fetchSerch, {
    enabled: role==='admin'? keyword.length===0 || !!keyword :!!keyword,
  });
};
