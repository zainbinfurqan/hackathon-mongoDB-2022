import React from 'react';
import Table from '../../components/table';

function ManagerList(props) {
    return (
        <div className='p-5'>
            <div className='p-5'>
                <button type="submit" class=" text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ADD MANAGER</button>
            </div>
            <Table />
        </div>
    );
}

export default ManagerList;