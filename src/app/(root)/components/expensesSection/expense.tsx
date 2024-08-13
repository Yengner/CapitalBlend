import { IconType } from "react-icons";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {
  category: string;
  Icon: IconType;
  amount: `$${string}`;
  comparedToLastMonth: `${string}%`;
  arrow: "up" | "down";
}

const ExpenseItem = ({
  Icon,
  category,
  amount,
  comparedToLastMonth,
  arrow,
}: Props) => (
  <div className="flex flex-row gap-4 items-stretch px-4 py-2">
    <div className="grid place-items-center aspect-square h-14 p-2 rounded-lg bg-gray-3/25">
      <Icon size={24} className="text-gray-1" />
    </div>

    <div className="flex flex-col">
      <span className="text-gray-1 font-medium text-xs">{category}</span>
      <span className="font-bold">{amount}</span>

      <div className="flex flex-row gap-2">
        <span className="text-gray-2 font-medium text-xs">
          {comparedToLastMonth}*
        </span>

        {arrow === "up" ? (
          <FaArrowUp className="text-red-500 text-base" />
        ) : (
          <FaArrowDown className="text-primaryBlue text-base" />
        )}
      </div>
    </div>
  </div>
);

export default ExpenseItem;
