import TopBar from "@/components/topbar/topbar";

import { CheckUser } from "@/lib/getUser";

export default async function home() {
  const { user_id } = await CheckUser();
  return (
    <main>
      <TopBar user_id={user_id} />
      <h2>hello world</h2>
    </main>
  );
}
