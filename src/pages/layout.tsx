import { Inter } from "next/font/google";
import MSWProvider from "../components/MSWProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MSWProvider>{children}</MSWProvider>;
}
