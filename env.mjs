import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    NEXT_PUBLIC_GRAPHQL_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_URL: z.string().url(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  },
})
