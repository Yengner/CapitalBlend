"use client";

import Card from "@/components/card";
import Section from "@/components/section";
import { IoChevronForward } from "react-icons/io5";
import BillItem from "./bill";
import Icons from "@/assets/icons";
import styles from "../../style.module.css";

const BillsSection = () => (
  <Section
    title="Upcoming Bills"
    className={styles.bills}
    controls={
      <button className="flex flex-row gap-2 text-xs text-[#878787]">
        View all <IoChevronForward />
      </button>
    }
  >
    <Card className="p-6 flex flex-col gap-6">
      <BillItem
        date={new Date()}
        logo={<Icons.Brands.Figma height={16} width={16} />}
        title="Figma - Monthly"
        lastCharge={new Date()}
        amount="$240"
      />

      <BillItem
        date={new Date()}
        logo={<Icons.Brands.Figma height={16} width={16} />}
        title="Figma - Monthly"
        lastCharge={new Date()}
        amount="$240"
      />
    </Card>
  </Section>
);

export default BillsSection;
