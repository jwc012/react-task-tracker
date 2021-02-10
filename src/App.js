import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Last Day At Experian",
      day: "Feb 11th",
      reminder: true,
    },
    {
      id: 2,
      text: "First Day at Acorns",
      day: "Feb 22th",
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length === 0 ? (
        "No Tasks to Show"
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
