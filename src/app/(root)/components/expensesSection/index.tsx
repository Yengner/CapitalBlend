"use client";

import Section from "@/components/section";
import Card from "@/components/card";
import ExpenseItem from "./expense";
import { BiFoodTag } from "react-icons/bi";
import styles from "../../style.module.css";
import { LuBuilding2 } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { RiMovie2Line, RiShoppingBag4Line } from "react-icons/ri";

const ExpensesSection = () => (
  <Section
    title="Expenses Breakdown"
    className={styles.expenses}
    controls={
      <span className="text-xs text-[#9F9F9F]">*Compare to last month</span>
    }
  >
    <Card className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <ExpenseItem
        amount="$120"
        category="Housing"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={LuBuilding2}
      />

      <ExpenseItem
        amount="$120"
        category="Food"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={IoFastFoodOutline}
      />

      <ExpenseItem
        amount="$120"
        category="Transportation"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={MdOutlineEmojiTransportation}
      />

      <ExpenseItem
        amount="$120"
        category="Extertainment"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={RiMovie2Line}
      />

      <ExpenseItem
        amount="$120"
        category="Shopping"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={RiShoppingBag4Line}
      />

      <ExpenseItem
        amount="$120"
        category="Others"
        comparedToLastMonth="15%"
        arrow="up"
        Icon={RiShoppingBag4Line}
      />
    </Card>
  </Section>
);

export default ExpensesSection;
