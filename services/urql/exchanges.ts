import { authExchange as ae, AuthConfig, AuthUtilities } from "@urql/exchange-auth";
import { subscriptionExchange as se } from "@urql/next";
import { createClient as createWSClient } from "graphql-ws";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import AppPath from "app/router/app-path";
import AppConstants from "common/app-constants";
import GraphqlConfig from "common/graphql-config";

const wsClient = createWSClient({
  url: GraphqlConfig.wsUrl,
});

export const subscriptionExchange = se({
  forwardSubscription(request) {
    const input = { ...request, query: request.query || "" };
    return {
      subscribe(sink) {
        const unsubscribe = wsClient.subscribe(input, sink);
        return { unsubscribe };
      },
    };
  },
});

export const authExchange = ({ isClient }: { isClient: boolean }) =>
  ae(async (utils: AuthUtilities) => {
    let session = await getServerSession();
    const autConfig: AuthConfig = {
      addAuthToOperation(operation) {
        const token = session?.user?.token;
        if (!token) return operation;
        return utils.appendHeaders(operation, {
          Authorization: `Bearer ${token}`,
        });
      },
      didAuthError(error) {
        return error.graphQLErrors.some((e) => e.extensions?.code === "AUTH_NOT_AUTHORIZED");
      },
      async refreshAuth() {
        session = await getServerSession();

        if (isClient && (!session || (session?.user as any)?.error === AppConstants.REFRESH_TOKEN_ERROR))
          signOut({ callbackUrl: AppPath.login() });
      },
    };
    return autConfig;
  });
