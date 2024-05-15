import { Inter } from "next/font/google";
import "./globals.css";
import homeCss from "./home.module.css";
import Link from "next/link";
import BaseHeader from "@/components/home/Header";
import LeftSide from "@/components/sidebar/LeftSide";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <BaseHeader />
          <div className={homeCss.emptyHeader}></div>
          <div className={homeCss.Container}>
            <div>
              <LeftSide />
            </div>
            <div className={homeCss.mainContent}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
