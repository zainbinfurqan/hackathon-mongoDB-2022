import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table';
import Button from '../../components/button';

function ManagerList(props) {
    const navigation = useNavigate()

    const handleNavigate = () => {
        navigation('/dashboard/manager/add')
    }
    return (
        <div className='p-5'>
            <div className='p-5'>
                <Button title="ADD MANAGER" onClick={handleNavigate} className='text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' />
            </div>
            <Table tableBody={[
                { fullName: 'zain ahmed', email: 'zain@g.com' }]}
                tableHeader={['fullName', 'email', 'actions']} />
        </div>
    );
}

export default ManagerList;