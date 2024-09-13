import React, { useState } from 'react'
import './Todo.css'
function Todolist() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];//deep copy 
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    return (
        <div className='todolist'>
            <h2>To-Do-List </h2>
            <div>
                <input
                    type='text'
                    placeholder='Enter Task ...'
                    value={newTask}
                    onChange={handleInputChange} />

                <button onClick={addTask} className='add-btn'>Add</button>
            </div>
            <ol className='container'>
                {tasks.map((element, index) => (
                    <li key={index}>
                        <span className='text'>{element}</span>
                        <button
                            className='delete-btn'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button
                            className='move-btn'
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>

                        <button
                            className='move-btn'
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Todolist