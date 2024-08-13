"use client";

import Card from "@/components/card";
import Section from "@/components/section";
import { IoChevronForward, IoFastFoodOutline } from "react-icons/io5";
import TransactionItem from "./transaction";
import { LuGamepad2 } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import PaginationDots from "@/components/paginationDots";
import Tabs from "./tabs";
import styles from "../../style.module.css";

const TransactionsSection = () => (
  <Section
    className={styles.transactions}
    title="Recent Transactions"
    controls={
      <button className="flex flex-row gap-2 text-xs text-[#878787]">
        View all <IoChevronForward />
      </button>
    }
  >
    <Card className="p-6 flex flex-col gap-3">
      <Tabs />

      <TransactionItem
        title="GTR 5"
        category="Gadget & Gear"
        amount="$120"
        date={new Date()}
        Icon={LuGamepad2}
      />

      <TransactionItem
        title="Polo Shirt"
        category="XL fashions"
        amount="$20.00"
        date={new Date()}
        Icon={TbShoppingBag}
      />

      <TransactionItem
        title="Burger"
        category="Food & Beverages"
        amount="$10.00"
        date={new Date()}
        Icon={IoFastFoodOutline}
      />

      <TransactionItem
        title="Taxi Fare"
        category="Uber"
        amount="$12.00"
        date={new Date()}
        Icon={MdOutlineEmojiTransportation}
      />

      <TransactionItem
        title="Keyboard"
        category="Gadget & Gear"
        amount="$22.00"
        date={new Date()}
        Icon={LuGamepad2}
      />

      <PaginationDots
        count={3}
        className="justify-center"
        activeIndex={0}
        onActiveIndexChange={(index) => {}}
      />
    </Card>
  </Section>
);

export default TransactionsSection;
