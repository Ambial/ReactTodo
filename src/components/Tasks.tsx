import React from 'react'
import { Task } from '../types/Task'
import TodoEntry from "./TodoEntry"

const Tasks:React.FC<Props> = ({listOfTasks, onDelete, onToggle}) => {
    return (
    <>
        {listOfTasks.map((task, index)=> <TodoEntry key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>)}
    </>
  )
}

type Props = {
  listOfTasks: Task[],
  onDelete: Function,
  onToggle: Function,
}

export default Tasks