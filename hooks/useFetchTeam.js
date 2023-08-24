import axios from "axios";
import { useQuery } from "react-query";
const API_URL =
  "https://api.uni-tech.xyz/wp-json/wp/v2/categories";

const fetchCategories = () => {
  return axios.get(`${API_URL}`);
};

const useCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => fetchCategories(),
  }); // Wrap the fetch call in a function
};

export default useCategories;
