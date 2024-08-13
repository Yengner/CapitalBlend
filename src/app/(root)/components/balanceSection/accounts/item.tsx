import Images from "@/assets/images";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const AccountsItem = () => (
  <div className="bg-primaryBlue p-4 rounded grid grid-cols-2 gap-2 cursor-pointer select-none">
    <div className="flex flex-col">
      <span className="text-sm text-white/70">Account Type</span>
      <span className="font-bold text-white">Credit Card</span>
      <span className="text-sm text-white/70">**** **** **** 1234</span>
    </div>

    <div className="flex flex-col justify-between text-white items-end">
      <Image
        src={Images.Mastercard}
        alt="Mastercard logo"
        className="w-12 h-7"
      />

      <div className="flex flex-row gap-3 items-center">
        <span className="font-bold">$25000</span>
        <BsArrowUpRightCircleFill size={24} />
      </div>
    </div>
  </div>
);

export default AccountsItem;
