import { TcovidData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// get user Details

export const useGetCovidData = () => {
  return useQuery({
    queryKey: ["use-get-covid-data"],
    queryFn: async () => {
      return (await axios.get("https://api.rootnet.in/covid19-in/stats/latest"))
        ?.data as TcovidData;
    },
  });
};
