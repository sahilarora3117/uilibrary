import React from 'react'
import Circles from './Circles'
export default function Cards() {
    return (
        <div>
            <div className="flex flex-row space-x-3 ml-4">

                <div class="max-w-md py-2 px-4 bg-gray-800 shadow-lg rounded-lg grid grid-cols-2">
                    <div class="grid grid-row-3 w-10">
                        <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Application</h2>
                        <h2 class="text-gray-200 text-2xl font-semibold font-sans">7956</h2>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right text-purple-300 mr-2 mt-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            <h2 class="text-purple-300 text-2xl font-semibold font-sans ">3.5%</h2>

                        </div>
                    </div>
                    <div>
                        <Circles class="" />

                    </div>
                </div>
                <div class="max-w-md py-2 px-4 bg-gray-800 shadow-lg rounded-lg grid grid-cols-2">
                    <div class="grid grid-row-3">
                        <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Application</h2>
                        <h2 class="text-gray-200 text-2xl font-semibold font-sans">7956</h2>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right text-purple-300 mr-2 mt-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            <h2 class="text-purple-300 text-2xl font-semibold font-sans ">3.5%</h2>

                        </div>
                    </div>
                    <div>
                        <Circles class="" />

                    </div>
                </div>
                <div class="max-w-md py-2 px-4 bg-gray-800 shadow-lg rounded-lg grid grid-cols-2">
                    <div class="grid grid-row-3">
                        <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Application</h2>
                        <h2 class="text-gray-200 text-2xl font-semibold font-sans">7956</h2>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right text-purple-300 mr-2 mt-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            <h2 class="text-purple-300 text-2xl font-semibold font-sans ">3.5%</h2>

                        </div>
                    </div>
                    <div>
                        <Circles class="" />

                    </div>
                </div>
                </div>
        </div>
    )
}
