import React from 'react'

export default function Headings() {
    return (
        <div className="bg-gray-900">
            <div class="flex justify-between ...">
                <div>
                    <p class=" font-sans  ml-6 text-2xl text-gray-300">Dashboard</p>
                    <p class=" font-sans  ml-6 text-lg text-gray-300">Monday, <span class="text-blue-400">02 July, 2020</span> </p>
                </div>
                <div>
                    <div className="flex flex-row">
                        <button class="mr-4 flex items-center px-2 py-2 font-medium tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-sm dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span class="mx-1">Add</span>
                        </button>
                        <div class="relative text-gray-600 mr-7">
  <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
  <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966"  width="512px" height="512px">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg>
  </button>
</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
