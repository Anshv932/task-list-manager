import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/customTabulatorStyles.css';

function TaskTable({ tasks, setTasks, filter }) {

    const columns = [
        {
            title: 'ID',
            field: 'id',
            headerSort: false,
            minWidth: 30,
            maxWidth: 50,
        },

        {
            title: 'Title',
            field: 'title',
            headerSort: false,
            headerFilter: true,
            headerFilterLive: true,
            headerFilterPlaceholder:"Search...",
            editor: 'input',
            maxWidth: 420,
            cellEdited: (cell) => {
                const rowData = cell.getRow().getData();
                const rowId = rowData.id;

                        fetch('https://jsonplaceholder.typicode.com/todos/' + rowId, {
                            method: "PUT",
                            body: JSON.stringify(rowData),
                            headers: { 'Content-Type': 'application/json' }
                        }).then((res) => {
                            if (res.ok) {
                                const updatedData = tasks.map((task) => (task.id === rowId ? rowData : task));
                                setTasks(updatedData);
                                toast.success('Title Updated!');
                            } else {
                                toast.error("Failed to update title.");
                            }
                        }).catch(() =>{
                            toast.error("Error updating title.");
                        });
            },
        },

        {
            title: 'Description',
            field: 'description',
            headerSort: false,
            headerFilter: true,
            headerFilterLive: true,
            headerFilterPlaceholder:"Search...",
            editor: 'input',
            cellEdited: (cell) => {
                const rowData = cell.getRow().getData();
                const rowId = rowData.id;

                fetch('https://jsonplaceholder.typicode.com/todos/' + rowId, {
                    method: "PUT",
                    body: JSON.stringify(rowData),
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => {
                    if (res.ok) {
                        const updatedData = tasks.map((task) => (task.id === rowId ? rowData : task));
                        setTasks(updatedData);
                        toast.success("Description Updated!");
                    } else {
                        toast.error("Failed to update description.");
                    }
                }).catch(() => {
                    toast.error("Error updating description.");
                });
            },
        },

        {
            title: 'Status',
            field: 'status',
            headerSort: false,
            editor: 'select',
            editorParams: { values: ['To Do', 'In Progress', 'Done'] },
            width: 85,
            cellEdited: (cell) => {
                const rowData = cell.getRow().getData();
                const rowId = rowData.id;

                fetch('https://jsonplaceholder.typicode.com/todos/' + rowId, {
                    method: "PUT",
                    body: JSON.stringify(rowData),
                    headers: { 'Content-Type': 'application/json' }
                }).then((res) => {
                    if (res.ok) {
                        const updatedData = tasks.map((task) => (task.id === rowId ? rowData : task));
                        setTasks(updatedData);
                        toast.success("Status Updated!");
                    } else {
                        toast.error("Failed to update status.");
                    }
                }).catch(() => {
                    toast.error("Error updating status.");
                });
            },
        },

        {
            title: 'Actions',
            field: 'actions',
            headerSort: false,
            width: 80,
            formatter: () => "<button class='bg-transparent hover:bg-teal-500 text-teal-700 font-thin hover:text-white py-0 px-1 border border-teal-500 hover:border-transparent rounded'>Delete</button>",
            cellClick: (e, cell) => {
                const rowData = cell.getRow().getData();
                fetch('https://jsonplaceholder.typicode.com/todos/' + rowData.id, {
                    method: "DELETE",
                }).then((res) => {
                    if (res.ok) {
                        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== rowData.id));
                        toast.success('Deleted'); 
                    } else {
                        toast.error("Unable to delete task.");
                    }
                }).catch(() => {
                    toast.error("Error deleting task.");
                });
            },
        },
    ];

    const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;

    return (
        <div className='mt-5 bg-white border-none rounded shadow-lg overflow-hidden'>
            <ToastContainer
                autoClose={1500}
                hideProgressBar={true}
            />
    
            <ReactTabulator
                data={filteredTasks}
                columns={columns}
                layout="fitColumns"
                options={{
                    pagination: 'remote',
                    paginationSize: 20,
                    resizableColumns: true,
                    autoResize: true,
                    responsiveLayout: 'collapse',                   
                }}
                className="tabulator"
            />
        </div>
    );
}

export default TaskTable;