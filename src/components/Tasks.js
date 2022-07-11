import TodoEntry from "./TodoEntry"

const Tasks = ({listOfTasks, onDelete, onToggle}) => {
    return (
    <>
        {listOfTasks.map((task)=> <TodoEntry key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)}
    </>
  )
}

export default Tasks