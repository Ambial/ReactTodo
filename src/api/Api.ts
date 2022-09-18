import { Task } from "../types/Task"

const baseURL = 'http://localhost:5000/tasks/'

export const fetchTasks = async ():Promise<JSON> => {
    const res:Response = await fetch(`${baseURL}`)
    const data:JSON = await res.json()

    return data
}

export const fetchTaskById = async (id:number):Promise<Task> => {
    const res:Response = await fetch(`${baseURL}${id}`)
    const data:JSON = await res.json()

    return JSON.parse(JSON.stringify(data.stringify))
}

export const updateTaskById = async (id:number) => {
    const taskToToggle:Task = await fetchTaskById(id)
    const updatedTask:Task = {...taskToToggle, reminder: !taskToToggle.reminder}

    await fetch(`${baseURL}${id}`,{
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
}

export const deleteTaskById = async (id:number) => {
    await fetch(`${baseURL}${id}`,{
        method: 'DELETE',
    })
}

export const addNewTask = async (task:Task):Promise<JSON> => {
    const res:Response = await fetch(`${baseURL}`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    return await res.json()
}