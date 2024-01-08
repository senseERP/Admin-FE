"use client";

import { UrqlProvider } from "@urql/next";
import useURQLClient from "services/urql/useURQLClient";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [client, ssr] = useURQLClient();

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
