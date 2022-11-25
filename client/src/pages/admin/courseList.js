import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Table from '../../components/table';

function CourseList(props) {
    const navigation = useNavigate()

    const handleNavigate = () => {
        navigation('/dashboard/course/add')
    }

    return (
        <div className='p-5'>
            <div className='p-5'>
                <Button title="ADD COURSE" onClick={handleNavigate} className='text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' />
            </div>
            <Table />
        </div>
    );
}

export default CourseList;