import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lovinyon",
  description: "Lovinyon Portal Site",
  thmeColor: "#1F2937",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="dark:bg-gray-800">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
