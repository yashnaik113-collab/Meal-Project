import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import httpClient from "../httpClient";

export const useGetfoodListData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["food_list"],
    queryFn: () => httpClient.get("/foods"),
  });

  return { data, error, isLoading };
};

export const useCreateFood = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, data, error } = useMutation({
    mutationFn: async (payload) => {
      const response = await httpClient.post(`/food`, payload);
      return response.data;
    },
  });

  return { mutate, isLoading, data, error };
};

export const useDeleteFood = (id) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, data, error } = useMutation({
    mutationFn: async ({ food_id }) => {
      const response = await httpClient.delete(`/food/delete/${id}`, {
        data: {
          food_id,
        },
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["food_list"]);
    },
  });

  return { mutate, isLoading, data, error };
};
