// src/components/menubar/SideBar.jsx
import { useState } from "react";
import { AppIcons } from "./constants/icons";
import { Link} from 'react-router-dom'
export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed hidden lg:flex top-0 left-0 h-screen pt-20  bg-[#F0EFEB] backdrop-blur-sm
         shadow-lg text-white transition-all duration-300
        ${isExpanded ? "w-56" : "w-16"} flex flex-col items-start z-[999]`}
    >
      <div className="flex flex-col gap-1 mt-10 w-full">
        <SidebarItem icon={AppIcons.star} text="Favourites" isExpanded={isExpanded} />
        <SidebarItem icon={AppIcons.search} text="Search history" isExpanded={isExpanded} />
        <SidebarItem icon={AppIcons.donate} text="Donate to us" isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, isExpanded }) {
  return (
    <div
      className="flex items-center gap-4 px-4 py-3 hover:bg-white cursor-pointer"
      title={text}
    >
      <div className="text-xl">{icon}</div>
      <Link 
        className={`whitespace-nowrap transition-all duration-200 overflow-hidden text-black ${
          isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
        }`}
      >
        {text}
      </Link>
    </div>
  );
}