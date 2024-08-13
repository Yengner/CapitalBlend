import { twMerge } from "tailwind-merge";

interface Props {
  color: `bg-${string}`;
  title: string;
}

const LegendItem = ({ color, title }: Props) => (
  <div className="flex flex-row gap-2 items-center">
    <span className={twMerge("h-2 w-4 rounded-[2px]", color)} />
    <span className="font-medium text-xs text-primaryLight">{title}</span>
  </div>
);

export default LegendItem;
