import React from 'react'
import { FiSearch } from "react-icons/fi"
import { XIcon } from "@heroicons/react/outline"

const Searchbar = ({setOpen}) => {
  return (
    <div className='absolute top-0 inset-x-0 md:hidden p-2'>
        <div className="bg-white h-20 flex items-center justify-center relative">
            <input type="text" placeholder='Search' className='w-full dark:bg-neutral-900 border-2 rounded-full pl-12 py-3 pr-4 border-[#B8E2A0] focus:outline-none focus:ring-0 focus-within:outline-none focus:border-[#8DA87D]' />
            <FiSearch size={24} className="absolute left-3 top-1/2 -translate-y-1/2" />
            <XIcon onClick={() => setOpen(false)}  className="absolute h-6 right-3 top-1/2 -translate-y-1/2" />
        </div>
    </div>
  )
}

export default Searchbar