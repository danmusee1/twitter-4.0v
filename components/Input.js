import { ExclamationIcon, PhotographIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 ">
       <img  className='h-10 w-10 rounded-full xl:mr-2 cursor-pointer hover:brightness-95'
        src='https://imgs.search.brave.com/sQF-4cufXFk2wnJpcrER7MdgLKPTHL-oTdLW9AAqHHM/rs:fit:600:600:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQWxzcTlCbnY2/N2svVkE0T25aazEz/Q0kvQUFBQUFBQUFE/dWcvV2FDb25VUlVn/OE0vczE2MDAvUm91/bmQlMkJQcm9maWxl/JTJCUGljLnBuZw'
         alt="user-img"
         />
         <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className='w-full border-none focus:ring-0 placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 ' rows="2" placeholder='Whats happening'></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex ">
                    <PhotographIcon className='h-10 w-10  hoverEffect text-sky-500 hover:gb-sky-100'/>
                    <ExclamationIcon className='h-10 w-10 hoverEffect text-sky-500 hover:gb-sky-100 '/>
                </div>
                <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50' >Tweet</button>
            </div>
         </div>
    </div>
  )
}
