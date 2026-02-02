import { useQuery } from "@tanstack/react-query";
import httpClient from "../httpClient";

export const useGetfoodListData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["food_list"],
    queryFn: () => httpClient.get("/foods"),
  });

  return { data, error, isLoading };
};
