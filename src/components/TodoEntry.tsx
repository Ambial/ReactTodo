import React from 'react'
import { FaTimes } from "react-icons/fa"
import { Task } from '../types/Task'

const TodoEntry:React.FC<Props> = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}
            <FaTimes style={{color:'red', cursor: 'pointer'}}
                     onClick={() => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

type Props = {
  task: Task,
  onDelete: Function,
  onToggle: Function
}

export default TodoEntry