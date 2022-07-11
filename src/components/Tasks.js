import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctor's appointment",
            day: "Feb 5th at 2:30PM",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at school",
            day: "Feb 6th at 1:30PM",
            reminder: true,
        },
        {
            id: 3,
            text: "Grocery shopping",
            day: "Feb 9th at 5:30PM",
            reminder: true,
        },
    ])

  return (
    <>
        {tasks.map((task)=> <h3 key={task.id}>{task.text}</h3>)}
    </>
  )
}

export default Tasks