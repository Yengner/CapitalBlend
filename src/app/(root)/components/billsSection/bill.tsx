import Icons from "@/assets/icons";
import { getMonthName } from "@/utils/getMonthName";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  date: Date;
  logo?: ReactNode;
  title: string;
  lastCharge: Date;
  amount: string;
}

const BillItem = ({ date, title, lastCharge, logo, amount }: Props) => (
  <div className="flex flex-row gap-5 justify-between items-center">
    <div className="flex flex-row gap-3 items-stretch">
      {/* Date */}
      <div className="flex flex-col items-center text-center gap-0.5 p-2 rounded-[8px] bg-[#D2D2D2]/25">
        <span className="text-xs text-[#666666] font-medium">
          {getMonthName(date)}
        </span>

        <span className="text-1.5xl font-extrabold">
          {date.getDate().toString().padStart(2, "0")}
        </span>
      </div>

      {/* Bill Info */}
      <div className="flex flex-col gap-1">
        {logo ? logo : <Icons.Sidebar.expenses />}
        <span className="text-primaryLight font-bold">{title}</span>

        <span className="text-lightGray text-xs">
          Last Charge - {lastCharge.toDateString()}
        </span>
      </div>
    </div>

    <span className="py-2 px-3 rounded-[8px] border border-[#E8E8E8]">
      {amount}
    </span>
  </div>
);

export default BillItem;
