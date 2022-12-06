import React, { useContext, useEffect, useState } from 'react';
import CourseViewCard from '../components/cards/courseView'
import SearchBar from '../components/search';
import io from 'socket.io-client';
import { AppContext } from '../context/appProvider';

const socket = io('ws://localhost:3001/', { transports: ['websocket'] });

function Search(props) {

    const [{ browseCourses }, { searchWithQuery, getCourses }] = useContext(AppContext)

    const [text, setText] = useState('')
    const [suggestedSearchText, setSuggestedSearchText] = useState([])

    useEffect(() => {
        eventLS()
        return () => socket.off('receive-suggestion');
    }, [socket])

    const handleKeyUp = () => {
        // socket.emit('search-auto-suggest', { t: text })
    }

    const eventLS = () => {
        socket.on('receive-suggestion', (data) => {
            data.length > 0 && setSuggestedSearchText(data.data)
        })
    }

    const handleTextChange = (value) => {
        console.log(value)
        setText(value)
    }

    useEffect(() => {
        if (text !== '') {
            socket.emit('search-auto-suggest', { t: text })
        }
    }, [text])

    const fetchCourses = async () => {
        await getCourses()
    }

    const handleClickSearch = async () => {
        await searchWithQuery(text)
    }

    useEffect(() => {
        fetchCourses()
    }, [])
    console.log("browseCourses", browseCourses)
    return (
        <div className='p-2'>
            <SearchBar
                suggestedSearchText={suggestedSearchText}
                handleKeyUp={handleKeyUp}
                handleClickSearch={handleClickSearch}
                handleTextChange={handleTextChange} value={text} />
            <div className='p-2 flex flex-wrap m-auto justify-center'>
                {browseCourses.length > 0 && browseCourses.map(item => {
                    return <CourseViewCard item={item} />
                })}
            </div>
        </div>
    );
}

export default Search;