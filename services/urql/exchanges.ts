import { subscriptionExchange as se } from "@urql/next";
import { createClient as createWSClient } from "graphql-ws";
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
