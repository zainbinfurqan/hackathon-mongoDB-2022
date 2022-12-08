import React, { useContext, useState } from 'react';
import Button from '../components/button';
import { AppContext } from '../context/appProvider';

function AddCourse(props) {
    const [{ }, { postCourse }] = useContext(AppContext)
    const [state, setStat] = useState({
        title: '',
        instructor: '',
        details: '',
        source: '',
        level: '',
        category: '',
        link: '',
        rating: 0
    })

    const handleAdd = async () => {
        await postCourse(state)
    }

    const onChange = (key, value) => {
        setStat({ ...state, [key]: value })
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
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="text"
                                        value={state.title}
                                        onChange={(e) => onChange('title', e.target.value)}
                                        id="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.instructor}
                                        onChange={(e) => onChange('instructor', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.details}
                                        onChange={(e) => onChange('details', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.source}
                                        onChange={(e) => onChange('source', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.level}
                                        onChange={(e) => onChange('level', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.category}
                                        onChange={(e) => onChange('category', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        value={state.link}
                                        onChange={(e) => onChange('link', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                    <input
                                        type="number"
                                        name="number"
                                        id="text"
                                        value={state.rating}
                                        onChange={(e) => onChange('rating', e.target.value)}
                                        placeholder=""
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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