import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({
   children 
  }: Readonly< {
    children: React.ReactNode;
  }>)  { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
