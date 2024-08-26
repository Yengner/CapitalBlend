"use client";

import { useState } from "react";
import Card from "@/components/card";
import Section from "@/components/section";
import { IoChevronForward } from "react-icons/io5";
import TransactionItem from "../../../../components/transactions/transaction";
import PaginationDots from "@/components/pagination/dots";
import Tabs from "./tabs";
import styles from "../../style.module.css";
import Link from "next/link";

const TransactionsSection = ({ accounts, transactions = [], appwriteItemId, page = 1 }: RecentTransactionsProps) => {
  
  const [activePage, setActivePage] = useState<number>(0);

  
  const transactionsPerPage = 4;
  const totalPages = 4; 

  const paginatedTransactions = transactions.slice(
    activePage * transactionsPerPage,
    (activePage + 1) * transactionsPerPage
  );

  return (
    <Section
      className={styles.transactions}
      title="Recent Transactions"
      controls={
        <button className="flex flex-row gap-2 text-xs text-[#878787]">
          <Link href={`transactions-history/?id=${appwriteItemId}`}>View all</Link>
          <IoChevronForward className="items-center mt-0.5" />
        </button>
      }
    >
      <Card className="p-2 flex flex-col gap-3 min-h-[120px]">
        <Tabs />

        {paginatedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction}/>
        ))}

        <PaginationDots
          count={totalPages}
          className="justify-center"
          activeIndex={activePage}
          onActiveIndexChange={(index) => setActivePage(index)}
        />
        </Card>

    </Section>
  );
};

export default TransactionsSection;
