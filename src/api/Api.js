const baseURL = 'http://localhost:5000/tasks/'

export const fetchTasks = async () => {
    const res = await fetch(`${baseURL}`)
    const data = await res.json()

    return data
}

export const deleteTaskById = async (id) => {
    await fetch(`${baseURL}${id}`,{
        method: 'DELETE',
    })
}