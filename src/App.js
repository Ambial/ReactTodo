import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {

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
    <div className='container'>
      <Header title={'Task Tracker'} />
      <Tasks listOfTasks={tasks}/>
    </div>
  );
}

export default App;
