"use client";

import Icons from "@/assets/icons";
import Card from "@/components/card";
import Section from "@/components/section";
import { getMonthName } from "@/utils/getMonthName";
import GoalItem from "./item";
import { FaAward } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import GoalChart from "./goalChart";
import styles from "../../style.module.css";

const GoalsSection = () => (
  <Section title="Goals" className={styles.goals}>
    <Card className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between border-b border-[#F3F3F3] pb-3">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-1.5xl font-extrabold">$20,000</span>

          <button>
            <Icons.Misc.Edit />
          </button>
        </div>

        <span className="text-sm text-[#525256] font-medium">
          {getMonthName(new Date())}, {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-col gap-10 md:flex-row justify-between items-center pt-3 flex-1">
        <div className="flex flex-col gap-6">
          <GoalItem
            icon={<FaAward className="text-lightGray size-6" />}
            title="Target Achieved"
            amount="$12,500"
          />

          <GoalItem
            icon={<GoGoal className="text-lightGray size-6" />}
            title="This month target"
            amount="$20,000"
          />
        </div>

        <GoalChart />
      </div>
    </Card>
  </Section>
);

export default GoalsSection;
