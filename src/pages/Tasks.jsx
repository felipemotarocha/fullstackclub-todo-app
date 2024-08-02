import Sidebar from "../components/Sidebar"
import Tasks from "../components/Tasks"

const TasksPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default TasksPage
