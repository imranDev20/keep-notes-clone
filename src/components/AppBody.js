import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const AppBody = () => {
  const [task, setTask] = useState("");
  const [text, setText] = useState("");
  const [tasksArray, setTasksArray] = useState([
    {
      id: 1,
      value: "Buy Books",
      text: "I did not choose coding, coding chose me",
    },
    {
      id: 2,
      value: "Develop",
      text: "If it's working on the first run, something probably is not right here",
    },
  ]);

  console.log(task);

  const addToTasks = () => {
    if (task === "") {
      return;
    }
    const newTask = { id: tasksArray.length + 1, value: task, text: text };
    const newTaskList = [...tasksArray, newTask];
    setTasksArray(newTaskList);
  };

  const deleteTask = (id) => {
    const newArray = tasksArray.filter((item) => item.id !== id);
    setTasksArray(newArray);
  };

  return (
    <main className="w-full bg-neutral-100 h-screen py-20">
      <div className="max-w-4xl mx-auto px-10">
        <div className="group w-full max-w-xl bg-white shadow-lg mx-auto rounded-md relative transition-all">
          <input
            className="w-full py-4 outline-none px-5 group-focus:block rounded-md transition-all text-neutral-600"
            type="text"
            name="task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Title"
          />
          <textarea
            className="w-full h-full px-5 outline-none rounded-b-md resize-none py-4 hidden group-focus-within:block transition-all text-neutral-600"
            name="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Take a note..."
            cols="30"
            rows="4"
          ></textarea>
          <button
            className="absolute bottom-0 translate-y-1/2 w-10 h-10 rounded-full right-10 bg-yellow-400 shadow-lg z-10 flex justify-center items-center"
            onClick={addToTasks}
          >
            <FiPlus className="text-white" />
          </button>
        </div>
        <div className="grid gap-5 grid-cols-3 my-20">
          {tasksArray.map((item) => {
            return (
              <div
                className="shadow-md hover:shadow-lg transition-all p-5 bg-white rounded-md"
                key={item.id}
              >
                <h3 className="text-neutral-600">{item.value}</h3>
                <p className="text-neutral-500">{item.text}</p>

                {/* <button onClick={() => deleteTask(item.id)}>Delete</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default AppBody;
