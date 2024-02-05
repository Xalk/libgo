// import { useTheme } from "@/features/theme";


import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export function AppLayout({children}: { children?: React.ReactNode }) {
    // const { theme } = useTheme();
    return (
        <div className={inter.className}>
            <div className="text-slate-900 dark:text-white">{children}</div>
        </div>
    );
}
