import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const status = getTransactionStatus(new Date(transaction.date));
  const amount = formatAmount(transaction.amount);

  const isDebit = transaction.type === "debit";
  const isCredit = transaction.type === "credit";

  return (
    <div
      className=' !over:bg-none  flex flex-row justify-between items-start sm:items-center border-b border-[#F3F3F3] h-[140px]' // Fixed height
      key={transaction.id}
    >
      <div className="flex flex-row gap-4 flex-1 items-center ml-3">
        <div className="bg-gray-3/25 rounded-lg p-2 aspect-square grid place-items-center size-10">
          {/*<Icon size={24} />*/}
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-[16px] truncate max-w-[123px] text-primary">{removeSpecialCharacters(transaction.name)}</span>
          <span className="text-sm text-gray-2">{transaction.category}</span>
        </div>
      </div>

      <div className="flex flex-col self-end sm:self-center items-end mr-3">
        <span className={`${isDebit ? `-${amount}` : isCredit ? amount : amount} ${isDebit || amount[0] === '-' ? 'text-[#F04438]' : 'text-[#039855]'} font-semibold `}
        >{amount}</span>
        <span className="text-sm text-gray-2">{formatDateTime(new Date(transaction.date)).dateTime}</span>
      </div>
    </div>
  );
};

export default TransactionItem;
