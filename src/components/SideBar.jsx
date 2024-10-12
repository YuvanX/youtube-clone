import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";

import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

function SideBar() {
    const sideBarItems1 = [{
        id: 1,
        iconName: "Home",
        icon: <GoHome/>
    }, {
        id: 2,
        iconName: "Shorts",
        icon: <SiYoutubeshorts/>
    }, {
        id: 3,
        iconName: "Subscriptions",
        icon: <MdOutlineSubscriptions/>
    }]

    const sideBarItems2 = [{
        id: 1,
        iconName: "Your channel",
        icon: <PiUserSquareThin/>
    }, {
        id: 2,
        iconName: "History",
        icon: <MdHistory/>
    }, {
        id: 3,
        iconName: "Playlists",
        icon: <MdOutlinePlaylistPlay/>
    }, {
        id: 4,
        iconName: "Your videos",
        icon: <BiVideo/> 
    }, {
        id: 5,
        iconName: "Watch later",
        icon: <MdOutlineWatchLater/>
    }, {
        id: 6,
        iconName: "Liked videos",
        icon: <AiOutlineLike/>
    }]

    const sideBarItems3 = [{
        id: 1,
        iconName: "Trending",
        icon: <BsFire/> 
    }, {
        id: 2,
        iconName: "Shopping",
        icon: <HiOutlineShoppingBag/>
    }, {
        id: 3,
        iconName: "Music",
        icon: <SiYoutubemusic/>
    }, {
        id: 4,
        iconName: "Films",
        icon: <PiFilmSlateLight/>
    }, {
        id: 5,
        iconName: "Live",
        icon: <CgMediaLive/>
    }, {
        id: 6,
        iconName: "Gaming",
        icon: <IoGameControllerOutline/>
    }, {
        id: 7,
        iconName: "News",
        icon: <FaRegNewspaper/>
    }, {
        id: 8,
        iconName: "Sport",
        icon: <TfiCup/>
    }, {
        id: 9,
        iconName: "Courses",
        icon: <PiLightbulbLight/>
    }, {
        id: 10,
        iconName: "Fashion & beauty",
        icon: <SiStylelint/>
    }, {
        id: 11,
        iconName: "Podcast",
        icon: <MdPodcasts/>
    }]

    const sideBarItems4 = [{
        id: 1,
        iconName: "Youtube Premium",
        icon: <FaYoutube/>
    }, {
        id: 2,
        iconName: "Youtube Studio",
        icon: <SiYoutubestudio/>
    }, {
        id: 3,
        iconName: "Youtube Music",
        icon: <SiYoutubemusic/>
    }, {
        id: 4,
        iconName: "Youtube Kids",
        icon: <SiYoutubekids/>
    }]

    const sideBarItems5 = [{
        id: 1,
        iconName: "Settings",
        icon: <IoSettingsOutline/>,
    }, {
        id: 2,
        iconName: "Report history",
        icon: <RiFlagLine/>
    }, {
        id: 3,
        iconName: "Help",
        icon: <IoHelpCircleOutline/>
    }, {
        id: 4,
        iconName: "Send feedback",
        icon: <RiFeedbackLine/>
    }]

  return (
    <div className='hidden md:block md:px-3 xl:w-[13%] lg:w-[15%] md:w-[20%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
            {sideBarItems1.map((item) => {
                return <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 px-3 py-2  rounded-lg'>
               <div className='text-2xl'>{item.icon}</div>
                <span className='text-sm font-normal'>{item.iconName}</span>
            </div>
            })}
            <hr className=' mt-3' />

            {/* You section */}
            <div className='flex items-center space-x-4 hover:bg-gray-200 px-3 py-2  rounded-lg mt-2'>
                <span className='text-md font-medium'>You</span>
                <FaChevronRight className='text-xs'/>

            </div>

            {sideBarItems2.map((item) => {
                return <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 px-3 py-2  rounded-lg'>
               <div className='text-2xl'>{item.icon}</div>
                <span className='text-sm font-normal'>{item.iconName}</span>
            </div>
            })}
            <hr className=' mt-3' />
            {/* Explore */}

            <div className='font-semibold text-md py-2 px-3'>Explore</div>
            {sideBarItems3.map((item) => {
                return <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 px-3 py-2  rounded-lg'>
               <div className='text-2xl'>{item.icon}</div>
                <span className='text-sm font-normal'>{item.iconName}</span>
            </div>
            })}
            <hr className=' mt-3' />
            {/* More from Youtube */}

            <div className='font-semibold text-md py-2 px-3'>More from Youtube</div>
            {sideBarItems4.map((item) => {
                return <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 px-3 py-2  rounded-lg'>
               <div className='text-2xl text-red-500'>{item.icon}</div>
                <span className='text-sm font-normal'>{item.iconName}</span>
            </div>
            })}
            <hr className=' mt-3' />
            <div className='mt-2'></div>

            {/* Settings */}
            {sideBarItems5.map((item) => {
                return <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 px-3 py-2  rounded-lg'>
               <div className='text-2xl'>{item.icon}</div>
                <span className='text-sm font-normal'>{item.iconName}</span>
            </div>
            })}
            <hr className=' mt-3' />
            <p className='text-xs text-gray-600 font-semibold px-3 py-2'>About Press Copyright<br />Contact us Creator Advertise<br />Developers<br /></p>
            <p className='text-xs text-gray-600 font-semibold  px-3 py-2'>Terms Privacy Policy & safety<br /> How Youtube works<br /> Test new features</p>

            <p className='text-xs text-gray-400 px-3 py-2'>© 2024 Google LLC</p>
    </div>
  )
}

export default SideBar