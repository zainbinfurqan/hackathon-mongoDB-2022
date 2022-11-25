import React from 'react';
import { Route, Routes } from "react-router-dom"
import AddCourse from './forms/addCourse';
import AddManager from './forms/addManager';
import AdminDashboard from './pages/admin';
import CourseList from './pages/admin/courseList';
import ManagerList from './pages/admin/managerList';
import Login from './pages/login'
import Search from './pages/search';
import SignUp from './pages/signup';

function Routing(props) {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/search' element={<Search />} />
            <Route path='/dashboard'>
                <Route path='/dashboard' index element={<AdminDashboard />} />
                <Route path='course' >
                    <Route index element={<CourseList />} />
                    <Route path='add' element={<AddCourse />} />
                </Route >
                <Route path='manager'>
                    <Route index element={<ManagerList />} />
                    <Route path='add' element={<AddManager />} />
                </Route >
            </Route>
        </Routes>
    );
}

export default Routing;