import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState ([
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
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
