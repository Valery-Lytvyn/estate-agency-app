import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loading from "./loading";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Estate Agency",
  description: "Estate Agency webpage",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Navbar />
        <main className="relative flex-1">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
