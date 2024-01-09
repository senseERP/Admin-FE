import { requestPolicyExchange } from "@urql/exchange-request-policy";
import { retryExchange } from "@urql/exchange-retry";
import { cacheExchange, createClient, Exchange, fetchExchange, ssrExchange } from "@urql/next";
import { useMemo } from "react";

import GraphqlConfig from "common/graphql-config";
import { authExchange, subscriptionExchange } from "./exchanges";

type Props = {
  hasAuth?: boolean;
};

export default function useURQLClient(props: Props | undefined = { hasAuth: true }) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: GraphqlConfig.url,
      exchanges: [
        requestPolicyExchange({
          ttl: 60 * 1000,
          shouldUpgrade: (operation) => operation.context.requestPolicy !== "cache-only",
        }),
        cacheExchange,
        ssr,
        props?.hasAuth
          ? authExchange({
              isClient: true,
            })
          : null,
        retryExchange({
          initialDelayMs: GraphqlConfig.initialDelayMs,
          maxDelayMs: GraphqlConfig.maxDelayMs,
          randomDelay: true,
          maxNumberAttempts: 2,
          retryIf: (err) => !!(err && err.networkError),
        }),
        fetchExchange,
        subscriptionExchange,
      ].filter((ex) => ex !== null) as Exchange[],
      suspense: true,
    });

    return [client, ssr];
  }, [props?.hasAuth]);

  return [client, ssr] as [typeof client, typeof ssr];
}
