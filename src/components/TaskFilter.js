import React from 'react';

function TaskFilter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='items-center w-1/2 md:w-1/4 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Filter by Status:</label>
      <select onChange={handleFilterChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-teal-500 focus:outline focus:shadow-outline text-sm md:text-base'>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default TaskFilter;