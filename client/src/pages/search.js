import React from 'react';
import CourseViewCard from '../components/cards/courseView'
import SearchBar from '../components/search';

function Search(props) {

    const course = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className='p-2'>
            <SearchBar />
            <div className='p-2 flex flex-wrap m-auto justify-center'>
                {course.map(item => {
                    return <CourseViewCard />
                })}
            </div>
        </div>
    );
}

export default Search;