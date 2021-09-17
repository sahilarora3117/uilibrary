import React from 'react'
import CallCard from './CallCard';
import Circles from './Circles'
import Graph from './Graph';

export default function MainContent() {
    return (
        <div className="bg-gray-900 grid grid-cols-4 p-4 gap-2">
            <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg grid grid-cols-2">
                <div class="grid grid-row-3 w-10">
                    <h2 class="text-gray-200 text-md font-semibold font-sans">Total Application</h2>
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
            <div class="py-2 px-4 bg-blue-500 shadow-lg rounded-lg grid grid-cols-2">
                <div class="grid grid-row-3">
                    <h2 class="text-gray-200 text-md font-semibold font-sans">Shortlisted</h2>
                    <h2 class="text-gray-200 text-2xl font-semibold font-sans">4658</h2>
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right text-purple-300 mr-2 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                        </svg>
                        <h2 class="text-purple-300 text-2xl font-semibold font-sans ">06%</h2>

                    </div>
                </div>
                <div>
                    <Circles class="" />

                </div>


            </div>
            <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg grid grid-cols-2">
                <div class="grid grid-row-3">
                    <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Approved</h2>
                    <h2 class="text-gray-200 text-2xl font-semibold font-sans">1501</h2>
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right text-purple-300 mr-2 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                        </svg>
                        <h2 class="text-purple-300 text-2xl font-semibold font-sans ">2.3%</h2>

                    </div>
                </div>
                <div>
                    <Circles class="" />

                </div>
            </div>
            <div class="">
                <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg">
                    <p class="text-gray-200 text-center">Hello John Bayer, </p>
                    <p class="text-gray-200 text-center">You Have 8 new notifications, Today ! </p>
                    <div class="flex justify-center">
                        <img alt="img" width="150" height="150" src="https://www.freepnglogos.com/uploads/teacher-png/boy-teacher-clipart-clipground-25.png" />

                    </div>
                </div>
            </div>

            <div class="py-4 px-8 bg-gray-800 shadow-lg rounded-lg w-full col-span-2">
                <Graph />
            </div>
            <div class="max-w-xl py-4 px-8 bg-gray-800 shadow-lg rounded-lg">
                <div>
                    <h2 class="text-gray-200 text-lg font-semibold font-sans">Total Applicants</h2>
                </div>
                <ul class="space-y-7 mt-5">
                    <li class="grid grid-cols-3 ">
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                            <p className="font-sans text-md text-gray-200 m-2">Shorted</p>
                        </div>
                        <div class="w-60 h-3 bg-blue-400 mt-4"></div>
                    </li>
                    <li class="grid grid-cols-3 gap-4">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
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
            <div class="row-span-2">
                <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg">
                    <p class="text-gray-200 text-left text-lg">New Applicants</p>
                    <CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard /><CallCard />


                </div>
            </div>
            <div class="col-span-2">
                <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg">
                    <div class=" grid grid-cols-2">
                        <p class="text-md text-gray-200">Referal and campaign Stats</p>
                        <div class="flex flex-col justify-end">
                            <p class="text-md text-red-300 text-right">40 Campaigns sent in total</p>
                            <p class="text-md text-gray-200 text-right">4 campaign sent last month</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 mt-20">
                        <div>
                            <p class="text-md text-gray-200 text-center">Users Reached</p>
                            <p class="text-sm text-blue-200 text-center mt-4">3.59</p>
                            <p class="text-lg text-gray-200 text-center mt-4">3400</p>
                        </div>
                        <div>
                            <p class="text-md text-gray-200 text-center">Referals</p>
                            <p class="text-sm text-blue-200 text-center mt-4">3.59</p>
                            <p class="text-lg text-gray-200 text-center mt-4">3400</p>
                        </div>
                        <div>
                            <p class="text-md text-gray-200 text-center">Shares</p>
                            <p class="text-sm text-blue-200 text-center mt-4">3.59</p>
                            <p class="text-lg text-gray-200 text-center mt-4">3400</p>
                        </div>
                        <div>
                            <p class="text-md text-gray-200 text-center">Applications</p>
                            <p class="text-sm text-blue-200 text-center mt-4">3.59</p>
                            <p class="text-lg text-gray-200 text-center mt-4">3400</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 mt-20 mb-10">
                        <button class="bg-blue-500 hover:bg-blue-700 m-5 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Start a new Campaign
                        </button>
                        <button class="bg-red-500 hover:bg-red-700 m-5 text-white font-bold py-2 px-4 border border-red-700 rounded">
                            Stop all ongoing Campaigns
                        </button>
                    </div>
                </div>

            </div>
            <div class="">
                <div class="py-2 px-4 bg-gray-800 shadow-lg rounded-lg">
                    <div class="grid grid-col-1">
                        <p class="text-gray-200 text-left text-md">Open Position by department</p>
                        <Circles />
                    </div>

                </div>


            </div>

        </div>

    )
}
