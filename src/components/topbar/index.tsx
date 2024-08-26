"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SearchInput from "./searchInput";
import { BiMenu } from "react-icons/bi";
import PlaidLink from "../plaid/PlaidLink";

const Topbar = ({ user, type="greeting"}:TopbarProps) => {

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-8 py-5 border-b border-[#E8E8E8] gap-4">
      <div className="flex flex-row gap-6 items-center">
        {/* Show greeting and date if type is 'greeting', otherwise just the date */}
        {type === "greeting" && (
          <p className="font-bold text-3xl">Hi {user.firstName}!</p>
        )}

        <div className="sm:flex flex-row gap-1 items-center text-lightGray text-sm hidden">
          <MdKeyboardDoubleArrowRight size={24} />
          <span>{new Date().toDateString()}</span>
        </div>
      </div>

      <PlaidLink user={user} />
    </header>
  );
};

export default Topbar;
