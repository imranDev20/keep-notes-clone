import "./App.css";
import { useState } from "react";
<TextField id="outlined-basic" label="Outlined" variant="outlined" />;

function App() {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([
    { id: 1, value: "Buy Books" },
    { id: 2, value: "Develop" },
  ]);

  console.log(task);

  const addToTasks = () => {
    console.log(task);
    const newTask = { id: tasksArray.length + 1, value: task };
    const newTaskList = [...tasksArray, newTask];
    setTasksArray(newTaskList);
  };

  const deleteTask = (id) => {
    const newArray = tasksArray.filter((item) => item.id !== id);
    setTasksArray(newArray);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="task"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please write down your task"
        />
        <button onClick={addToTasks}>Add</button>
      </div>
      <div>
        {tasksArray.map((item) => {
          return (
            <p key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
