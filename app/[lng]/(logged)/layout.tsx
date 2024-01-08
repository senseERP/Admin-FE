import { redirect } from "next/navigation";
import { ProfileDocument, ProfileQuery, ProfileQueryVariables } from "@graphql/operations";
import AppPath from "app/router/app-path";
import getClient from "services/urql/getClient";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const client = getClient();
  const profile = await client
    .query<ProfileQuery, ProfileQueryVariables>(
      ProfileDocument,
      {},
      {
        requestPolicy: "network-only",
      }
    )
    .toPromise();

  // if (profile.error) {
  //   redirect(AppPath.login());
  // }

  return <>{children}</>;
}
