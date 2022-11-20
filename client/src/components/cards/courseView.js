import React from 'react';

function CourseViewCard(props) {
    return (
        <div class="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Complete 2022 Web Development Bootcamp</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps</p>
                <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">Created by <span className='text-blue-700'>Dr. Angela Yu</span></p>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Language <span className='text-blue-700'>English</span></p>
                <div className='flex'>
                    <div className='flex py-3 '>
                        <span
                            class=" flex flex-wrap justify-between items-center text-xs sm:text-xs bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
                            Advance
                        </span>
                    </div>
                    <div className='flex py-3 mx-1'>
                        <span
                            class=" flex flex-wrap justify-between items-center text-xs sm:text-xs bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
                            Full Stack
                        </span>
                    </div>
                </div>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Rating <span className='text-blue-700'>4.7</span></p>

                <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Go to course
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    );
}

export default CourseViewCard;