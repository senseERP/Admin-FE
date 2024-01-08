import { requestPolicyExchange } from "@urql/exchange-request-policy";
import { retryExchange } from "@urql/exchange-retry";
import { cacheExchange, createClient, fetchExchange, ssrExchange } from "@urql/next";
import { useMemo } from "react";
import GraphqlConfig from "common/graphql-config";
import { subscriptionExchange } from "./exchanges";

export default function useURQLClient() {
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
        retryExchange({
          initialDelayMs: GraphqlConfig.initialDelayMs,
          maxDelayMs: GraphqlConfig.maxDelayMs,
          randomDelay: true,
          maxNumberAttempts: 2,
          retryIf: (err) => !!(err && err.networkError),
        }),
        fetchExchange,
        subscriptionExchange,
      ],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return [client, ssr] as [typeof client, typeof ssr];
}
