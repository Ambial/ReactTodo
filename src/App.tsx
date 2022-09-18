import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';
import About from './components/About';
import { deleteTaskById, fetchTasks, addNewTask, updateTaskById } from './api/Api';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Task } from './types/Task';

const App:React.FC = () => {
  const [showAddSection, setShowAddSection] = useState<Boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])

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

  const addTask = async (task:Task) => {
    const newTask = await addNewTask(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id:number) => {
    deleteTaskById(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id:number) => {
    updateTaskById(id)

    setTasks(tasks.map((task) => task.id === id 
      ? {...task, reminder: !task.reminder }
      : task)
    )
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Header title={'Task Tracker'} 
          onToggle={toggleAddSection}
          activated={!showAddSection}
        />
        <Routes>
          <Route path="about" element={<About />}/>
          <Route path="/" element={
            <>
              { showAddSection 
                ? <AddTask onAdd={addTask}/>
                : ''
              }
              { tasks.length 
                ? <Tasks listOfTasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
                : 'Nothing to do!'
              }
              <Footer />
            </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
