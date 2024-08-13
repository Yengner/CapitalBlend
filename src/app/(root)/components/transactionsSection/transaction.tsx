import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  title: string;
  category: string;
  amount: string;
  date: Date;
}

const TransactionItem = ({ Icon, title, category, amount, date }: Props) => (
  <div className="flex flex-row justify-between items-start sm:items-center py-6 border-b border-[#F3F3F3] gap-7">
    <div className="flex flex-row gap-4 flex-1 items-center">
      <div className="bg-gray-3/25 rounded-lg p-2 aspect-square grid place-items-center size-10">
        <Icon size={24} />
      </div>

      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-sm text-gray-2">{category}</span>
      </div>
    </div>

    <div className="flex flex-col self-end sm:self-center items-end">
      <span className="font-semibold text-primaryLight">{amount}</span>
      <span className="text-sm text-gray-2">{date.toDateString()}</span>
    </div>
  </div>
);

export default TransactionItem;
