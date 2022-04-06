import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ButtonClear from "./components/ButtonClear";


import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  //CLEAR BUTTON
  const clearAll = () => {
     setTasks("")
  }

 

  // DELETE TASK
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
    // setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };
  // ADD TASK

  const addTask = (newTask) => {
    const id = tasks.length +1
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };
  // Toogle Show
  const toggleShow = () => setShowAddTask(!showAddTask);

  // Double-click-Task-Done-Through-line
  const toggleDone = (toogleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toogleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}  />
      ) : (
        <h2 style={{ textAlign: "center" }}>No Task To Show</h2>
      )}

      <ButtonClear clearAll={clearAll}/>
    </div>
  );
}

export default App;
