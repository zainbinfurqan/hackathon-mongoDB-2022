import React from 'react';
import Button from '../components/button';

function AddCourse(props) {

    const handleAdd = async () => {
        await fetch('http://localhost:3001/courses',
            {
                method: 'POST', body: JSON.stringify({})
            })
    }

    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="my-4 flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Add Course
                            </h1>
                            <div class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" placeholder="" name="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                                    <input type="text" name="text" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                    <input type="number" name="number" id="text" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <Button onClick={handleAdd} title="ADD" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddCourse;