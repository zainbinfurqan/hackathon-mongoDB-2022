import React from 'react';
import { Route, Routes } from "react-router-dom"
import AddCourse from './forms/addCourse';
import AddManager from './forms/addManager';
import CourseList from './pages/admin/courseList';
import ManagerList from './pages/admin/managerList';
import Login from './pages/login'
import Search from './pages/search';

function Routing(props) {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/search' element={<Search />} />
            <Route path='course'>
                <Route path='list' element={<CourseList />} />
                <Route path='add' element={<AddCourse />} />
            </Route >
            <Route path='manager'>
                <Route path='list' element={<ManagerList />} />
                <Route path='add' element={<AddManager />} />
            </Route >
        </Routes>
    );
}

export default Routing;