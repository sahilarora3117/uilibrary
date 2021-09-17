import React from 'react'
import Header from './Header'
import Headings from './Headings'
import MainContent from './MainContent'
export default function Navigation() {
    return (
        <div>
            <div class="flex flex-row h-screen">
                <nav class=" bg-gray-900 w-20  justify-between flex flex-col ">
                    <div class="mt-10 mb-10">
                        <a href="#">
                            <img
                                src="https://www.freeiconspng.com/uploads/tumblr-logo-icon-9.png"
                                class="w-10 h-10 mb-3 mx-auto"
                            />
                        </a>
                        <div class="mt-10">
                            <ul>
                                <li class="mb-6 m-1 border-r-4 border-blue-600" >
                                    <a href="#">
                                        <svg class="fill-current h-5 w-5 mx-auto text-blue-600 hover:text-blue-800" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-6  m-1 border-r-4 border-opacity-0">
                                    <a href="#">
                                        <span>
                                            <svg class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500" viewBox="0 0 16 16">
                                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />                                        </svg>
                                        </span>
                                    </a>
                                </li>
                                <li class="mb-6  m-1 border-r-4 border-opacity-0">
                                    <a href="#">
                                        <span>
                                            <svg class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500" viewBox="0 0 16 16">
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li class="mb-6  m-1 border-r-4 border-opacity-0">
                                    <a href="#">
                                        <span>
                                            <svg class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />                                            </svg>
                                        </span>

                                    </a>
                                </li>
                                <li class="mb-6  m-1 border-r-4 border-opacity-0">
                                    <a href="#">
                                        <span>
                                            <svg class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/></svg>                                        </span>

                                    </a>
                                </li>
                                <li class="mb-6  m-1 border-r-4 border-opacity-0">
                                    <a href="#">
                                        <span>
                                            <svg class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500" viewBox="0 0 16 16">
                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>                      </svg>                  </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-4">
                        <a href="#">
                            <span>
                                <svg
                                    class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </nav>
                <div class="text-gray-700 bg-gray-200 h-screen w-screen">
                    <Header />
                    <Headings />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}
