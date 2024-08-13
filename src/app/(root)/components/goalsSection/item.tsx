import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  amount: string;
}

const GoalItem = ({ icon, title, amount }: Props) => (
  <div className="flex flex-row gap-1">
    {icon}

    <div className="flex flex-col gap-1">
      <span className="text-xs text-[#878787]">{title}</span>
      <span className="font-bold">{amount}</span>
    </div>
  </div>
);

export default GoalItem;
