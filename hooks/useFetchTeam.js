import axios from "axios";
import { useQuery } from "react-query";
const API_URL =
  "https://apisf.p2pcdn.xyz/api/v1/event/10385717";

const fetchTeam = () => {
  return axios.get(`${API_URL}`);
};

const useTeam = () => {
  return useQuery({
    queryKey: ["teamMatch"],
    queryFn: () => fetchTeam(),
  }); // Wrap the fetch call in a function
};

export default useTeam;
