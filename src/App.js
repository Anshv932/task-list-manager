import React, { useEffect, useState } from 'react';
import TaskTable from './components/TaskTable';
import AddTaskForm from './components/AddTaskForm';
import TaskFilter from './components/TaskFilter';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetch data from API
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => {
                const mappedTasks = data.map((task) => ({
                    id: task.id,
                    title: task.title,
                    description: '',
                    status: task.completed ? 'Done' : 'To Do',
                }));
                setTasks(mappedTasks);
            });
    }, []);

    return (
        <div className='font-sans flex flex-col items-center justify-center  p-5 min-h-screen w-full'>
            <h1 className='text-3xl font-bold text-gray-800 mb-5'>Task List Manager</h1>
                <AddTaskForm tasks={tasks} setTasks={setTasks} />
                <TaskFilter setFilter={setFilter} />
                <div className='shadow-lg w-screen max-w-6xl'>
                    <TaskTable tasks={tasks} setTasks={setTasks} filter={filter} />
                </div>
        </div>
    );
}

export default App;