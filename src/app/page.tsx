import TopBar from "@/components/topbar/topbar";

import { CheckUser } from "@/lib/getUser";

export default async function home() {
  const { user_string } = await CheckUser();
  return (
    <main>
      <TopBar userString={user_string} />
      <h2>hello world</h2>
    </main>
  );
}
