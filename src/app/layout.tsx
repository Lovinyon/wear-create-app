import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wear Create App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  );
}
