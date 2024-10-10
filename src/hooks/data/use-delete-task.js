import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const { data: deletedTask } = await axios.delete(
        `http://localhost:3000/tasks/${taskId}`
      )
      return deletedTask
    },
    onSuccess: () => {
      queryClient.setQueryData("tasks", (oldTasks) => {
        return oldTasks.filter((task) => task.id !== taskId)
      })
    },
  })
}
