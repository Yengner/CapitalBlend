import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  controls?: ReactNode;
  className?: string;
}

const Section = ({
  title,
  controls,
  children,
  className,
}: PropsWithChildren<Props>) => (
  <section className={twMerge("flex flex-col gap-2 flex-1", className)}>
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <h3 className="text-[#878787] text-1.5xl">{title}</h3>
      {controls}
    </div>

    {children}
  </section>
);

export default Section;
