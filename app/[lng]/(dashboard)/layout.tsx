import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/auth";
import AppPath from "app/router/app-path";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // const client = getClient();
  // const profile = await client
  //   .query<LoggedCheckQuery, LoggedCheckQueryVariables>(
  //     LoggedCheckDocument,
  //     {},
  //     {
  //       requestPolicy: "network-only",
  //     }
  //   )
  //   .toPromise();

  //// redirect to login if not logged in
  // if (profile.error) {
  //   redirect(AppPath.login());
  // }

  // redirect to login if not logged in
  if (!session || !session?.user) {
    redirect(AppPath.login());
  }

  return <>{children}</>;
}
