"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

type TopBarProps = {
  user_id: string | null;
};

export default function TopBar({ user_id }: TopBarProps) {
  return (
    <section>
      {user_id ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </section>
  );
}
