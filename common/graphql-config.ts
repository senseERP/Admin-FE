import { env } from "env.mjs"

const GraphqlConfig = {
  url: env.NEXT_PUBLIC_GRAPHQL_URL,
  wsUrl: env.NEXT_PUBLIC_GRAPHQL_WS_URL,
  initialDelayMs: 5000,
  maxDelayMs: 15000,
}

export default GraphqlConfig
