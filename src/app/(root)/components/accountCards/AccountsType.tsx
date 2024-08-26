import AccountCard from "@/components/AccountCard";
import AddAccountCard from "@/components/AddAccountCard";
import type { NextPage } from "next";

interface AccountTypeProps {
  accounts: {
    data: Account[]; // Assuming `data` is an array of `Account` objects
  };
}
const AccountType = ({ accounts }:AccountTypeProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {/* Account Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accounts.data.map((account: Account) => (
          <AccountCard
            account={account}
            key={account.id}
          />              
        ))}
        <AddAccountCard />
      </div>
    </div>
  );
};

export default AccountType;
