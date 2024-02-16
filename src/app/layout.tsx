import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CheckUser } from "@/lib/getUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Splatter",
  description: "paint tracker and database for tabletop gamers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
