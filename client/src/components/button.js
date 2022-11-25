import React from 'react';

function Button(props) {
    return (
        <div className='bg-blue-400 rounded-lg '>
            <button onClick={props.onClick} type="submit"
                className={`w-full text-white hover:bg-primary-700 focus:ring-4 
             focus:outline-none focus:ring-primary-300 font-medium 
             text-sm px-5 py-2.5 text-center dark:bg-primary-600 
             dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${props.className}`}>{props.title}</button>
        </div>
    );
}

export default Button;