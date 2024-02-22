"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import styles from "./topbar.module.css";

type TopBarProps = {
  user_id: string | null;
};

export default function TopBar({ user_id }: TopBarProps) {
  return (
    <section className={styles.topbar}>
      <Image src={`/assets/Logo.svg`} alt={"alt"} width="44" height="44" />
      {user_id ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </section>
  );
}
