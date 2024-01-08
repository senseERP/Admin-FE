import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import GraphqlConfig from "common/graphql-config";
import { authExchange } from "./exchanges";

export default function getClient() {
  const { getClient: gc } = registerUrql(() =>
    createClient({
      url: GraphqlConfig.url,
      exchanges: [cacheExchange, authExchange, fetchExchange],
    })
  );

  return gc();
}
