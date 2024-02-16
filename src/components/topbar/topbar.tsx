"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

type TopBarProps = {
  userString: string | null;
};

export default function TopBar({ userString }: TopBarProps) {
  return (
    <section>
      {userString ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </section>
  );
}
