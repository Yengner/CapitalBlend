"use client";

import Card from "@/components/card";
import Section from "@/components/section";
import Link from "next/link";
import Accounts from "./accounts";
import styles from "../../style.module.css";

const BalanceSection = ({ accounts = [], totalCurrentBalance}: TotalBalanceBoxProps) => (
  <Section title="Total Balance" className={styles.balance}>
    <Card className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center pb-3 border-b border-[#F3F3F3]">
        <span className="text-1.5xl font-extrabold">${totalCurrentBalance}</span>

        <Link
          href="/accounts"
          className="text-sm font-medium text-primaryLight hover:underline"
        >
          All Accounts
        </Link>
      </div>

      <Accounts accounts={accounts} />
    </Card>
  </Section>
);

export default BalanceSection;
