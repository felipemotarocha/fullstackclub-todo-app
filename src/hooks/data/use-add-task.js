import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const { data: createdTask } = await axios.post(
        "http://localhost:3000/tasks",
        task
      )
      return createdTask
    },
    onSuccess: (createdTask) => {
      queryClient.setQueryData("tasks", (oldTasks) => [
        ...oldTasks,
        createdTask,
      ])
    },
  })
}
