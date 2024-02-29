import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { UserDetails } from "@/lib/getUser";
import "./global.css";
import TopBar from "@/components/topbar/topbar";
import civilFont from "../lib/custom-fonts";

export const metadata: Metadata = {
  title: "Splatter",
  description: "paint tracker and database for tabletop gamers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user_id } = await UserDetails();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${civilFont.variable}`}>
          <TopBar user_id={user_id} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
