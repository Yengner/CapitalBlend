import { twMerge } from "tailwind-merge";

interface Props {
  count: number;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  className?: string;
}

const PaginationDots = ({
  count,
  activeIndex,
  onActiveIndexChange,
  className,
}: Props) => (
  <div className={twMerge("flex flex-row gap-2", className)}>
    {Array.from({ length: count }, (_, i) => (
      <button
        key={i}
        className={twMerge(
          "h-2 w-2 rounded-full p-0 transition-colors bg-[#D1D1D1]",
          i === activeIndex && "bg-primaryBlue"
        )}
        onClick={() => onActiveIndexChange(i)}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
);

export default PaginationDots;
