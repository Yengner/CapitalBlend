
import Topbar from "@/components/topbar";
import BalanceSection from "./components/balanceSection";
import BillsSection from "./components/billsSection";
import TransactionsSection from "./components/transactionsSection";
import GoalsSection from "./components/goalsSection";
import StatisticsSection from "./components/statisticsSection";
import ExpensesSection from "./components/expensesSection";
import styles from "./style.module.css";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { totalExpenseTransaction } from "@/lib/utils";

const HomePage = async ({ searchParams: {id, page}}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if(!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })

  const transactionsExpenses = totalExpenseTransaction(account?.transactions);

  return (
    <main className="flex-1 bg-background">
      <Topbar user={loggedIn}/>

      <div className={styles.dashboard}>
        <BalanceSection 
        accounts={accountsData}
        totalCurrentBalance={accounts?.totalCurrentBalance}     
        />
        <GoalsSection />
        <BillsSection />
        <TransactionsSection
         accounts={accountsData}
         transactions={account?.transactions}
         appwriteItemId={appwriteItemId}
         page={currentPage}/>
        <StatisticsSection 
          transactions={account?.transactions}
        
        />
        <ExpensesSection />
      </div>
    </main>
  );
};

export default HomePage;
