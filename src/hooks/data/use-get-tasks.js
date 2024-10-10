import { useQuery } from "@tanstack/react-query"

import { api } from "../../lib/axios"

export const useGetTasks = () => {
  return useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const { data: tasks } = await api.get("/tasks")
      return tasks
    },
  })
}
