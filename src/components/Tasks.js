import TodoEntry from "./TodoEntry"

const Tasks = ({listOfTasks, onDelete}) => {
    return (
    <>
        {listOfTasks.map((task)=> <TodoEntry key={task.id} task={task} onDelete={onDelete}/>)}
    </>
  )
}

export default Tasks