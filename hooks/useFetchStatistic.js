import axios from "axios";
import { useQuery } from "react-query";
const API_URL =
  "https://apisf.p2pcdn.xyz/api/v1/event/10385717/lineups";

const fetchStatistic = () => {
  return axios.get(`${API_URL}`);
};

const useStatisticMatch = () => {
  return useQuery({
    queryKey: ["statisticMatch"],
    queryFn: () => fetchStatistic(),
  }); // Wrap the fetch call in a function
};

export default useStatisticMatch;
