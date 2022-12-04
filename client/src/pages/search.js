import React, { useEffect, useState } from 'react';
import CourseViewCard from '../components/cards/courseView'
import SearchBar from '../components/search';
import io from 'socket.io-client';

const socket = io('ws://localhost:3001/', { transports: ['websocket'] });

function Search(props) {

    const [text, setText] = useState('')
    const [suggestedSearchText, setSuggestedSearchText] = useState([])

    useEffect(() => {
        eventLS()
        return () => socket.off('receive-suggestion');
    }, [socket])

    const course = [1, 2, 3, 4, 5, 6, 7];

    const handleKeyUp = () => {
        socket.emit('search-auto-suggest', { t: text })
    }

    const eventLS = () => {
        socket.on('receive-suggestion', (data) => {
            setSuggestedSearchText(data.data)
        })
    }

    return (
        <div className='p-2'>
            <SearchBar
                suggestedSearchText={suggestedSearchText}
                handleKeyUp={handleKeyUp}
                handleTextChange={(value) => setText(value)} value={text} />
            <div className='p-2 flex flex-wrap m-auto justify-center'>
                {course.map(item => {
                    return <CourseViewCard />
                })}
            </div>
        </div>
    );
}

export default Search;