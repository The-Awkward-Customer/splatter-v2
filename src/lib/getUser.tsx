"use server";

import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

// NOTES:
// the CheckUser Function checks to see if the user exists in the db and adds it if not.
// it also exposes the value of userId to be used elsewhere

export async function UserDetails() {
  console.log("hello world");

  const { userId } = await auth();
  console.log(`the user id is ${userId}`);

  const user = await currentUser();

  const username = `${user?.firstName} ${user?.lastName}`;

  let sqlGetUser_id = `SELECT * FROM users`; // SQL query string

  let sqlInputNewUser = `INSERT INTO users (user_string, user_name) VALUES ($1, $2)`;

  let sqlReturnAssociatedUserData = `
  select
    p.id,
    p.name,
    categories.product_type,
    brand.brand_name,
    company.company_name,
    string_agg(
      colors.color,
      ', '
      order by
        colors.color
    ) as colors,
    case
      when upj.product_id is not null then true
      else false
    end as user_association
  from
    products p
    join categories on p.category_id = categories.id
    join brand on p.brand_id = brand.id
    join company on brand.company_id = company.id
    join product_color_junction on p.id = product_color_junction.product_id
    join colors on product_color_junction.color_id = colors.id
    left join user_products_junction upj on p.id = upj.product_id
    and upj.user_id = ($1)
  group by
    p.id,
    p.name,
    categories.product_type,
    brand.brand_name,
    company.company_name,
    upj.product_id`;

  //get users and check if user exists
  const getUsers = await db.query(sqlGetUser_id); // SQL query
  const users = getUsers.rows;

  // this will return falsy and trigger the query when the user is signed out.
  // we use a truthy check for user id to ensure it is not NULL
  const userExists = users.some((user: any) => user.user_id === userId);

  //if user does NOT exist create new user in Database
  if (!userExists && userId) {
    await db.query(sqlInputNewUser, [userId, username]);
  }

  //get Data for specific user_id
  const getAssociatedData = await db.query(sqlReturnAssociatedUserData, [
    userId,
  ]);
  const userSpecificData = getAssociatedData.rows;

  return {
    user_id: userId,
    username: username,
    userSpecificData: userSpecificData,
  };
}
