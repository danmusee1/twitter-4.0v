import React from 'react'
import Image from "next/image"
import SidebarMenuItem from './SidebarMenuItem';
import {  HomeIcon } from '@heroicons/react/solid'
import { BellIcon,DotsHorizontalIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxInIcon, UserCircleIcon} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
function Sidebar() {
  return (
    <div>
        {/*Twitterlogo*/}
        <div ClassName="hoverOver">
      <Image width="50" height="50" src="https://imgs.search.brave.com/HSqZIViVT05nuvKYi1zxI4wa9U4S0cYVgXJBDNUjowc/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEwMDBs/b2dvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDYv/VHdpdHRlci1Mb2dv/LnBuZw">
        
      </Image>
         </div>
    {/*menu*/}
     <div ClassName="">
        <SidebarMenuItem text="Home" Icon={HomeIcon}/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notification" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxInIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserCircleIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        
        </div>
     {/*button*/}
        <button>Tweet</button>
         {/*min9i-prifile*/}
         <div  ClassName="h-5" >
        <img height="50px" src='https://th.bing.com/th/id/R.1a522e523f8662b44bfc6f16bd9dd86a?rik=KXam80wdAmdujA&pid=ImgRaw&r=0'/>
        <div ClassName="">
            <h4>Dan Musee</h4>
            <p>@rayzrmd</p>
        </div>
        <DotsHorizontalIcon height="50px" ClassName='h-5'/>
         </div>
         </div>
  
)}

export default Sidebar;