"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <h1>Client Page</h1>
      <p>Session: {JSON.stringify(session)}</p>
    </div>
  );
}
