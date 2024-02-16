"use server";

import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { CheckUserData } from "./queries";

// NOTES:
// the CheckUser Function checks to see if the user exists in the db and adds it if not.
// it also exposes the value of userId to be used elsewhere

export async function CheckUser() {
  console.log("hello world");

  const { userId } = await auth();
  console.log(`the user id is ${userId}`);

  const user = await currentUser();

  const username = `${user?.firstName} ${user?.lastName}`;

  console.log(username);
  return { user_string: userId, username: username };
}
