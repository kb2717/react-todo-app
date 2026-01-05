import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={item.completed ? "completed" : ""}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
