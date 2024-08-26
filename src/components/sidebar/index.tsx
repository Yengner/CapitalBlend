"use client";


import SidebarMenu from "./menu";
import { cn } from '@/lib/utils'

import Icons from "@/assets/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useRouter } from "next/router";
import { logoutAccount } from "@/lib/actions/user.actions";

const Sidebar = ({ user }: SiderbarProps) => {

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();
  }

  return (
    <aside
    className={twMerge(
      "px-6 py-12 bg-primary text-white flex-col justify-between gap-10 fixed lg:static lg:w-[280px] lg:flex inset-y-0 left-0 z-50",
      "w-[75%] sm:w-[60%] md:w-[50%]" // Width adjustment for different screen sizes
    )}
    >
      {/* Top section */}
      <div className="flex flex-col gap-10">
        
        <div className="flex items-center gap-2 mt-5">
          <Image src="/icons/logo.png" alt="Capital Blend Logo" width={40} height={30}/>
              <p className="text-2xl col-start-2 text-white tracking-[3px] text-center font-extrabold">
                CapitalBlend
              </p>
        </div>

        <div className="grid grid-cols-3">
 


        </div>

        <SidebarMenu />
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-11">
        {/* User profile */}
        <div className="flex flex-row items-center justify-between py-11 border-t border-white border-opacity-[0.08]">
          <div className="flex flex-row gap-4 items-center">

            <div className='footer_name'>
              <p className="text-2xl font-bold text-gray-700">
                {user.firstName[0]}
              </p>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-[19px]">{user.firstName}</span>
              <p className="text-[15px] truncate font-normal text-gray-100 ">
                {user?.email}
              </p>
            </div>
          </div>

          <BsThreeDotsVertical size={24} />
        </div>

        {/* Logout Button */}
        <button className="flex flex-row gap-3 opacity-75 focus:opacity-100 hover:opacity-100 bg-white bg-opacity-[0.08] rounded py-3 px-4 items-center font-semibold transition-opacity" onClick={handleLogout}>
          <Icons.Sidebar.logout className="shrink-0 h-6 w-6" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
