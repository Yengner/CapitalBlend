import Sidebar from "@/components/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const user = await getLoggedInUser();
    if (!user) {
        redirect('/login');
    }
  return (
    <main>
        <div className={twMerge(inter.className, "text-lg flex flex-row text-primary")}>
                <Sidebar user={user}/>
                {children}
        </div>
    </main>
  );
}
