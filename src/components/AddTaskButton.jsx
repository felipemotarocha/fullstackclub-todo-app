import { useState } from "react"

import { AddIcon } from "../assets/icons/index"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"

const AddTaskButton = () => {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setAddTaskDialogIsOpen(true)}>
        <AddIcon />
        Nova tarefa
      </Button>

      <AddTaskDialog
        isOpen={addTaskDialogIsOpen}
        handleClose={() => setAddTaskDialogIsOpen(false)}
      />
    </>
  )
}

export default AddTaskButton
