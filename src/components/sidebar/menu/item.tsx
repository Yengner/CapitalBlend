import Link from "next/link";
import { FC, SVGProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  link: string;
  title: string;
  icon: FC<SVGProps<SVGElement>>;
  isActive: boolean;
}

const SidebarMenuItem = ({ icon: Icon, title, link, isActive }: Props) => (
  <Link
    href={link}
    className={twMerge(
      "flex flex-row py-3 px-4 gap-3 text-white/70 items-center rounded transition-all",
      isActive
        ? "bg-primaryBlue text-white"
        : "hover:bg-white/5 focus:bg-white/5 hover:text-white focus:text-white"
    )}
  >
    <Icon className="w-6 h-6 shrink-0" />

    <span>{title}</span>
  </Link>
);

export default SidebarMenuItem;
