"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SearchInput from "./searchInput";
import { BiMenu } from "react-icons/bi";

const Topbar = ({ user }: { user: string }) => {


  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-8 py-5 border-b border-[#E8E8E8] gap-4">
      <div className="flex flex-row gap-6 items-center">

        <p className="font-bold text-3xl">Hello {user}</p>

        <div className="sm:flex flex-row gap-1 items-center text-lightGray text-sm hidden">
          <MdKeyboardDoubleArrowRight size={24} />
          <span>{new Date().toDateString()}</span>
        </div>
      </div>

      <SearchInput />
    </header>
  );
};

export default Topbar;
