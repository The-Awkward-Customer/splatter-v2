"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

// The user id array is passes an object with a key value pair
// Because it is passed an array the value will always be truthy
// So we must check to see if the value is a string or NULL
// we conditionally render based on the value being string or Null

export default function TopBar({ userString }: { userString: string | null }) {
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
