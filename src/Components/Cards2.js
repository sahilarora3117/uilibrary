import React from 'react'
import Graph from './Graph';
export default function Cards() {
    return (
        <div>
            <div className="flex flex-row space-x-3 ml-4">

                <div class="max-w-3xl py-4 px-8 bg-gray-800 shadow-lg rounded-lg w-full">
                    <Graph/>
                </div>

                <div class="max-w-xl py-4 px-8 bg-gray-800 shadow-lg rounded-lg">
                    <div>
                        <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Applicants</h2>
                    </div>
                    <ul class="space-y-4 ">
                        <li class="grid grid-cols-3 gap-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="font-sans text-md text-gray-200 m-2">Applicants</p>
                            </div>
                            <div class="w-40 h-3 bg-gray-400 mt-4"></div>
                        </li>
                        <li class="grid grid-cols-3 gap-4 ">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400" width="12" height="12" fill="currentColor"  viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="font-sans text-md text-gray-200 m-2">Short Listed</p>
                            </div>
                            <div class="w-60 h-3 bg-blue-400 mt-4"></div>
                        </li>
                        <li class="grid grid-cols-3 gap-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" width="12" height="12" fill="currentColor"  viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="font-sans text-md text-gray-200 m-2">Rejected</p>
                            </div>
                            <div class="w-20 h-3 bg-red-400 mt-4"></div>
                        </li>
                        <li class="grid grid-cols-3 gap-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="font-sans text-md text-gray-200 m-2">On Hold</p>
                            </div>
                            <div class="w-10 h-3 bg-gray-600 mt-4"></div>
                        </li>
                        <li class="grid grid-cols-3 gap-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-400" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>

                                <p className="font-sans text-md text-gray-200 m-2">Unknown</p>
                            </div>
                            <div class="w-64 h-3 bg-purple-400 mt-4"></div>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    )
}
