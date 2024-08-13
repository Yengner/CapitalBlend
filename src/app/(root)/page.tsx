
import Topbar from "@/components/topbar";
import BalanceSection from "./components/balanceSection";
import BillsSection from "./components/billsSection";
import TransactionsSection from "./components/transactionsSection";
import GoalsSection from "./components/goalsSection";
import StatisticsSection from "./components/statisticsSection";
import ExpensesSection from "./components/expensesSection";
import styles from "./style.module.css";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const HomePage = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <main className="flex-1 bg-background">
      <Topbar user={loggedIn?.name || "Guest"}/>

      <div className={styles.dashboard}>
        <BalanceSection />
        <GoalsSection />
        <BillsSection />
        <TransactionsSection />
        <StatisticsSection />
        <ExpensesSection />
      </div>
    </main>
  );
};

export default HomePage;
