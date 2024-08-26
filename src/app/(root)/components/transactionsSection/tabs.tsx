import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Tabs = () => {
  const items = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Revenue",
      value: "revenue",
    },
    {
      name: "Expenses",
      value: "expenses",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <div className="flex flex-row flex-wrap gap-2 items-center justify-center font-bold text-primaryLight mb-2 mt-4">
      {items.map((item) => (
        <button
          onClick={() => setActiveTab(item.value)}
          className={twMerge(
            "p-2 border-b-2 border-transparent transition-colors",
            activeTab === item.value && "border-primaryBlue text-primaryBlue"
          )}
          key={item.value}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
