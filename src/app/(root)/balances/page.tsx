import HeaderBox from '@/components/HeaderBox'
import Card from '@/components/card'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'
import AccountsCard from '../components/accountCards/AccountsType';
import Topbar from '@/components/topbar';
import AccountType from '../components/accountCards/AccountsType';

const TotalAccounts = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  return (
    <section className='flex-1 bg-background'>
      <Topbar user={loggedIn} type="date"/>
      <div className='my-banks '>
        <div className='space-y-4'>
          <h2 className='text-[#878787] text-1.5xl'>
            Balances
          </h2>
          <div className='flex flex-wrap gap-6'>
              <AccountType
                accounts={accounts} 
              />
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default TotalAccounts