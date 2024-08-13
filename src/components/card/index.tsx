import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const Card = ({ children, className }: PropsWithChildren<Props>) => (
  <div
    className={twMerge(
      "bg-white rounded-2xl px-6 py-5 shadow-[0px_20px_25px_0px_#4C67641A] flex-1",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
