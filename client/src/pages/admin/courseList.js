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
            <Table
                tableBody={[
                    {
                        title: 'The Complete 2022 Web Development Bootcamp',
                        instructor: 'Dr. Angela Yu',
                        details: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps',
                        source: 'coursera',
                        level: 'Intermediate',
                        category: 'Web Development',
                        link: 'http://localhost:3000/search',
                        rating: 4.8,
                        status: 'viewable'
                    }]}
                tableHeader={[
                    'title',
                    'instructor',
                    'details',
                    'source',
                    'level',
                    'category',
                    'link',
                    'rating',
                    'actions']} />
        </div>
    );
}

export default CourseList;