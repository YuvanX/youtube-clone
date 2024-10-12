import React, { createContext, useContext, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../assets/youtubeLogo.png";
import profile from "../assets/JOIN.png"
import { useNavigate } from 'react-router-dom';
import Search from './Search';

function NavBar() {
    const [searchData, setSearchData] = useState("")
    const navigate = useNavigate()
    
  return (
    <div className='flex justify-between px-6 py-2 w-full fixed top-0 bg-white'>
        <div className='flex items-center space-x-4'>
            <AiOutlineMenu className='text-xl cursor-pointer hover:bg-gray-200 rounded-full duration-300 '/>
            <img src={logo} alt="youtubeLogo" className='w-28 cursor-pointer' onClick={() => {
                navigate("/")
            }} />
        </div>

        <div className='w-[35%] flex items-center'>
            <div className='w-[100%] rounded-l-full border px-3 py-2'>
                <input onChange={(e) => {
                    setSearchData(e.target.value)
                }} type="text" placeholder='Search' className='outline-none'/>
            </div>
            <button onClick={() => {
                navigate(`/search/:${searchData}`)
               
            }} className='text-xl border bg-gray-200 px-4 py-2.5 rounded-r-full'>
                <CiSearch/>
            </button>
            <IoMdMic className='text-2xl ml-3 hover:bg-gray-200 rounded-full cursor-pointer'/>

        </div>
        <div className='flex items-center space-x-6'>
            <RiVideoAddLine className='text-2xl cursor-pointer hidden md:block'/>
            <AiOutlineBell className='text-2xl cursor-pointer hidden md:block'/>
            <img src={profile} alt="profile" className='h-8 rounded-full cursor-pointer' />
            
        </div>
    </div>
  )
}

export default NavBar