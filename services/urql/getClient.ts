import { cacheExchange, createClient, fetchExchange } from "@urql/core"
import { registerUrql } from "@urql/next/rsc"
import GraphqlConfig from "common/graphql-config"

export default function getClient() {
  const { getClient: result } = registerUrql(() =>
    createClient({
      url: GraphqlConfig.url,
      exchanges: [cacheExchange, fetchExchange],
    })
  )

  return result
}
