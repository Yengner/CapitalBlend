import { SidebarNavItems } from "@/constants/constants";
import SidebarMenuItem from "./item";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-col gap-4">
      {SidebarNavItems.map((item) => (
        <SidebarMenuItem
          key={item.link}
          {...item}
          isActive={path === item.link}
        />
      ))}
    </nav>
  );
};

export default SidebarMenu;
