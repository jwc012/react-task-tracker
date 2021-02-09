import { useState } from 'react'

const Tasks = (props) => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};


export default Tasks;
