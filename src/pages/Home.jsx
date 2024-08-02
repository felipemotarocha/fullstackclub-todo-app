import { TrashIcon } from "../assets/icons/index"
import AddTaskButton from "../components/AddTaskButton"
import Button from "../components/Button"
import Sidebar from "../components/Sidebar"

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <span className="text-xs font-semibold text-brand-primary">
              Início
            </span>
            <h2 className="text-xl font-semibold">Início</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button color="ghost">
              Limpar tarefas
              <TrashIcon />
            </Button>

            <AddTaskButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
