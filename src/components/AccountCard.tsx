import Images from "@/assets/images";
import Image from "next/image";
import AccountActions from "./AccountActions";


const AccountCard = ({
  account
}:AccountProp) => {
  return (
<div className="shadow-lg rounded-lg bg-white p-6 flex flex-col gap-4 w-full min-w-[372px] max-w-[410px]">
      <div className="flex justify-between items-center border-b pb-4">
        <b className="capitalize text-xl text-gray-500">{account?.subtype}</b>
        <div className="flex flex-row items-center">
          <span className="text-sm text-gray-500 ">{account?.name}</span>
          <Image src={Images.Mastercard} alt="Mastercard" width={60} height={40} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-[20px] text-primary">●●●● ●●●● ●●●● {account?.mask}</span>
        <span className="text-sm text-gray-500">Account Number</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-[20px] text-primary">${account?.currentBalance}</span>
        <span className="text-sm text-gray-500">Total Amount</span>
      </div>
      <AccountActions accountId={account.appwriteItemId}/>

    </div>
  );
};

export default AccountCard;
