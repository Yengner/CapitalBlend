"use client";

import Card from "@/components/card";
import Section from "@/components/section";
import Link from "next/link";
import Accounts from "./accounts";
import styles from "../../style.module.css";

const BalanceSection = () => (
  <Section title="Total Balance" className={styles.balance}>
    <Card className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center pb-3 border-b border-[#F3F3F3]">
        <span className="text-1.5xl font-extrabold">$240,399</span>

        <Link
          href="/accounts"
          className="text-sm font-medium text-primaryLight hover:underline"
        >
          All Accounts
        </Link>
      </div>

      <Accounts />
    </Card>
  </Section>
);

export default BalanceSection;
