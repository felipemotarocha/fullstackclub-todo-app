import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (data) => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: data.title.trim(),
          description: data.description.trim(),
          time: data.time,
        }),
      })
      if (!response.ok) throw new Error()
      const updatedTask = await response.json()
      queryClient.setQueryData("tasks", (oldTasks) => {
        return oldTasks.map((task) => {
          if (task.id === taskId) {
            return updatedTask
          }
          return task
        })
      })
      queryClient.setQueryData(["task", taskId], updatedTask)
    },
  })
}
