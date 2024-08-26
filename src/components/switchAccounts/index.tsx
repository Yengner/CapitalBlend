"use client"; 


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useRouter } from "next/navigation";
  
  interface SelectAccountProps {
    accounts: Account[];
    currentAccount: string;
     // Adjust the type according to your data structure
  }
  
  export function SelectAccount({ accounts, currentAccount }: SelectAccountProps) {
    const router = useRouter();
    const handleAccountChange = (appwriteItemId: string) => {
        // Update the URL with the new account ID
        router.push(`transactions-history/?id=${appwriteItemId}`);
      };
    
    return (
      <Select onValueChange={handleAccountChange}>
        <SelectTrigger className="w-[200px] bg-gray-100 justify-between">
          <SelectValue placeholder={currentAccount} />
        </SelectTrigger>
        <SelectContent className="bg-gray-100 ">
          <SelectGroup>
            <SelectLabel >Accounts</SelectLabel>
            {accounts.map((account) => (
              <SelectItem key={account.appwriteItemId} value={account.appwriteItemId} className={`cursor-pointer ${
                currentAccount === account.appwriteItemId ? "text-primaryBlue bg-primaryBlue" : ""}`}>
                {account.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  