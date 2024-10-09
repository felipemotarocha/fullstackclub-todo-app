import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error()
      return response.json()
    },
    onSuccess: () => {
      queryClient.setQueryData("tasks", (oldTasks) => {
        return oldTasks.filter((task) => task.id !== taskId)
      })
    },
  })
}
