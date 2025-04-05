import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {ViewTransitions} from "next-view-transitions";
import Footer from "./components/Footer";



const montserrat = Montserrat({
  subsets: ["latin"], 
  variable: "--font-montserrat", 
});



export const metadata: Metadata = {
  title: "BLZS Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={montserrat.variable}>
        <body lang="hu" className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
