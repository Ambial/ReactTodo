import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';
import { deleteTaskById, fetchTasks, addNewTask, fetchTaskById, updateTaskById } from './api/Api';

function App() {
  const [showAddSection, setShowAddSection] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const toggleAddSection = () => {
    setShowAddSection(!showAddSection)
  }

  const addTask = async (task) => {
    const newTask = await addNewTask(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    deleteTaskById(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    updateTaskById(id)

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
