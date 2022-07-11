import TodoEntry from "./TodoEntry"

const Tasks = ({listOfTasks, onDelete, onToggle}) => {
    return (
    <>
        {listOfTasks.map((task, index)=> <TodoEntry key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>)}
    </>
  )
}

export default Tasks