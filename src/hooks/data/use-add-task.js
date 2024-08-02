import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
      })
      return response.json()
    },
    onSuccess: (task) => {
      queryClient.setQueryData("tasks", (oldTasks) => {
        return [...oldTasks, task]
      })
    },
  })
}
