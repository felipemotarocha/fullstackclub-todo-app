import { useState } from "react"
import Header from "./Header"

function Tasks() {
  const [inputValue, setInputValue] = useState("teste")
  const [messages, setMessages] = useState([
    "Hello world",
    "FSC is the best course in the world",
  ])

  function handleButtonClick() {
    setMessages([...messages, inputValue])
  }

  return (
    <div>
      <Header>
        <h1>Add a Task</h1>
      </Header>

      <input
        className="input"
        type="text"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="button" onClick={handleButtonClick}>
        Add task
      </button>

      <Header>
        <h1>My Tasks</h1>
      </Header>

      <div>
        <ul>
          {messages.map((message) => {
            return <li key={message}>{message}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Tasks
