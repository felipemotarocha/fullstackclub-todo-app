import { useMutation, useQueryClient } from "@tanstack/react-query"

import { api } from "../../lib/axios"

export const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const { data: deletedTask } = await api.delete(`/tasks/${taskId}`)
      return deletedTask
    },
    onSuccess: () => {
      queryClient.setQueryData("tasks", (oldTasks) => {
        return oldTasks.filter((task) => task.id !== taskId)
      })
    },
  })
}
