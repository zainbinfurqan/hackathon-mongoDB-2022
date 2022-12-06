import React from 'react';

function SearchBar({ handleKeyUp, handleClickSearch, handleTextChange, onTextSelect, ...props }) {
    return (
        <div class="flex flex-col mx-2">
            <div class="flex">
                <div class="relative w-full">
                    <input value={props.value} onChange={(e) => handleTextChange(e.target.value)} type="search" onKeyUp={handleKeyUp} id="location-search" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                    <button onClick={handleClickSearch}
                        type="submit"
                        class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
            {props.suggestedSearchText.length > 0 &&
                <div className="bg-white border-b border-l border-r border-gray p-2 w-56">
                    {props.suggestedSearchText.map(item => {
                        return <p className='p-1 cursor-pointer'
                            onClick={() => handleTextChange(item)}>{item}</p>
                    })}
                </div>}
        </div >
    );
}

export default SearchBar;