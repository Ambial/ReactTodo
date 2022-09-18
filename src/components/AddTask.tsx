import React, { FormEvent } from 'react'
import { useState } from "react";

type Props = {
    onAdd: Function,
}

const AddTask:React.FC<Props> = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

const resetState = () => {
    setText('')
    setDay('')
    setReminder(false)
}

const onSubmit = (e:FormEvent) => {
    e.preventDefault()

    if (!text) {
        alert('Please enter task description!')
        return
    }

    onAdd({ text, day, reminder})
    resetState()
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' 
                   placeholder="Add task" 
                   value={text} 
                   onChange={(e) => setText(e.target.value)} 
            />
        </div>
        <div className="form-control">
            <label>Day & TIme</label>
            <input type='text' 
                   placeholder="Select due date" 
                   value={day} 
                   onChange={(e) => setDay(e.target.value)} 
            />
        </div>
        <div className="form-control form-control-check ">
            <label htmlFor='reminderCheckbox'>Set reminder</label>
            <input type='checkbox'
                   id='reminderCheckbox'
                   checked={reminder}
                   value={reminder.toString()}
                   onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>

        <input type='submit' 
               value='Save Task' 
               className="btn btn-block"
        />
    </form>
  )
}

export default AddTask