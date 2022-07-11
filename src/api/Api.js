const baseURL = 'http://localhost:5000/tasks/'

export const fetchTasks = async () => {
    const res = await fetch(`${baseURL}`)
    const data = await res.json()

    return data
}

export const fetchTaskById = async (id) => {
    const res = await fetch(`${baseURL}${id}`)
    const data = await res.json()

    return data
}

export const updateTaskById = async (id) => {
    const taskToToggle = await fetchTaskById(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    await fetch(`${baseURL}${id}`,{
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
}

export const deleteTaskById = async (id) => {
    await fetch(`${baseURL}${id}`,{
        method: 'DELETE',
    })
}

export const addNewTask = async (task) => {
    const res = await fetch(`${baseURL}`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    return await res.json()
}