

const Tasks = ({listOfTasks}) => {
    return (
    <>
        {listOfTasks.map((task)=> <h3 key={task.id}>{task.text}</h3>)}
    </>
  )
}

export default Tasks