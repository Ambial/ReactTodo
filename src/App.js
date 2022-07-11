import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddSection, setShowAddSection] = useState(false)
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

  const toggleAddSection = () => {
    setShowAddSection(!showAddSection)
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
      ? {...task, reminder: !task.reminder }
      : task)
    )
  }

  return (
    <div className='container'>
      <Header title={'Task Tracker'} 
              onToggle={toggleAddSection}
              activated={!showAddSection}
      />
      { showAddSection 
        ? <AddTask onAdd={addTask}/>
        : ''
      }
      { tasks.length 
        ? <Tasks listOfTasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : 'Nothing to do!'
      }      
    </div>
  );
}

export default App;
