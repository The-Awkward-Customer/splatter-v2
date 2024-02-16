// Define and export a function that generates a SQL query with dynamic values

type CheckUserDataTypes = {
  user_string: string | null;
};

export const CheckUserData = ({ user_string }: CheckUserDataTypes) => {
  // Use parameterized query
  return {
    text: `SELECT users.user_uid FROM users WHERE user_string = $1`,
    values: [user_string], // $1 is replaced by user_string
  };
};
