import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTaskForm({ tasks, setTasks }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const addTask = (e) => {
        e.preventDefault();

        //create a new task object
        const newTask = {
            userId: "11814813",
            id: tasks.length + 1,
            title,
            description,
            status,
        };

        //Send POST request to add the task
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) {
                toast.success('New Task Added!');
                // Prepend the new task to the existing tasks array
                setTasks((prevTasks) => [newTask, ...prevTasks]);

                // Reset form fields
                setTitle('');
                setDescription('');
                setStatus('To Do');
            } else {
                toast.error('Failed to add task!');
            }
        }).catch((error) => {
            toast.error('An error occured while adding the task.');
        });
    };

    return (         
            <form onSubmit={addTask} className='flex flex-col md:flex-row gap-2 mb-5'>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-teal-500 focus:outline focus:shadow-outline text-sm md:text-base'
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-teal-500 focus:outline focus:shadow-outline'
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)} className='shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight outline-teal-500 focus:outline focus:shadow-outline'>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Add Task</button>
            </form>
    );
}

export default AddTaskForm;