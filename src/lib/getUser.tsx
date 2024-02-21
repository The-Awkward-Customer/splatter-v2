"use server";

import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

// NOTES:
// the CheckUser Function checks to see if the user exists in the db and adds it if not.
// it also exposes the value of userId to be used elsewhere

export async function CheckUser() {
  console.log("hello world");

  const { userId } = await auth();
  console.log(`the user id is ${userId}`);

  const user = await currentUser();

  const username = `${user?.firstName} ${user?.lastName}`;

  let sqlGetUser_id = `SELECT * FROM users`; // SQL query string

  let sqlInputNewUser = `INSERT INTO users (user_string, user_name) VALUES ($1, $2)`;

  let sqlReturnAssociatedUserData = `SELECT
  p.*,
  CASE
    WHEN upj.product_id IS NOT NULL THEN true
    ELSE false
  END AS user_association
FROM
  products p
  LEFT JOIN user_products_junction upj ON p.id = upj.product_id
  AND upj.user_id = ($1)`;

  //get users and check if user exists
  const getUsers = await db.query(sqlGetUser_id); // SQL query
  const users = getUsers.rows;

  // this will return falsy and trigger the query when the user is signed out.
  // we use a truthy check for user id to ensure it is not NULL
  const userExists = users.some((user: any) => user.user_id === userId);
  console.log(`does the user exists? ${userExists}`);

  //if user does NOT exist create new user in Database
  if (!userExists && userId) {
    await db.query(sqlInputNewUser, [userId, username]);
  }

  //get Data for specific user_id
  const getAssociatedData = await db.query(sqlReturnAssociatedUserData, [
    userId,
  ]);
  const userSpecificData = getAssociatedData.rows;

  console.log(
    `associated data is: ${JSON.stringify(userSpecificData, null, 2)}`
  );

  return {
    user_id: userId,
    username: username,
    userSpecificData: userSpecificData,
  };
}
