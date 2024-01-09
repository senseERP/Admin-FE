import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { Exchange } from "@urql/next";
import { registerUrql } from "@urql/next/rsc";
import GraphqlConfig from "common/graphql-config";
import { authExchange } from "./exchanges";

type Props = {
  hasAuth?: boolean;
};

export default function getClient(props: Props | undefined = { hasAuth: true }) {
  const { getClient: gc } = registerUrql(() =>
    createClient({
      url: GraphqlConfig.url,
      exchanges: [
        cacheExchange,
        props?.hasAuth
          ? authExchange({
              isClient: false,
            })
          : null,
        fetchExchange,
      ].filter((ex) => ex !== null) as Exchange[],
    })
  );

  return gc();
}
