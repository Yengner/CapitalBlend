import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

type AccountActionsProps = {
    accountId:string
};

const AccountActions: React.FC<AccountActionsProps> = ({
    accountId
}) => {
  return (
    <div className="flex justify-between items-center mt-2">
      <button 

        className="text-primaryBlue hover:underline"
      >
        Remove
      </button>
      <button className="flex items-center text-white hover:bg-blue-100 rounded px-3 py-1 transition bg-primaryBlue">
        <Link href={`/transactions-history/?id=${accountId}`}>
        Details 
        </Link>
        <IoChevronForward className="ml-1" />
      </button>
    </div>
  );
};

export default AccountActions;
