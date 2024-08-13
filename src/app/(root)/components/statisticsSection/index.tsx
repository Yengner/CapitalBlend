"use client";

import Card from "@/components/card";
import Section from "@/components/section";
import LegendItem from "./legend";
import StatisticsChart from "./chart";
import styles from "../../style.module.css";
import Select from "react-select";

const StatisticsSection = () => (
  <Section title="Statistics" className={styles.statistics}>
    <Card className="px-6 py-4 flex flex-col gap-3.5 h-[258px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Select
          defaultValue={{ value: "weekly", label: "Weekly Comparison" }}
          options={[
            { value: "weekly", label: "Weekly Comparison" },
            { value: "montly", label: "Monthly Comparison" },
            { value: "yearly", label: "Yearly Comparison" },
          ]}
          classNames={{
            control: () =>
              "!border-none !outline-none text-primary font-semibold",
            indicatorSeparator: () => "hidden",
          }}
        />

        <div className="flex flex-row gap-6 items-center shrink-0">
          <LegendItem color="bg-primaryBlue" title="This week" />
          <LegendItem color="bg-gray" title="Last week" />
        </div>
      </div>

      <StatisticsChart />
    </Card>
  </Section>
);

export default StatisticsSection;
