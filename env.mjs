import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    NEXT_PUBLIC_GRAPHQL_URL: z.string().url(),
    NEXT_PUBLIC_GRAPHQL_WS_URL: z.string().url(),
    SESSION_SECRET: z.string(),
    TOKEN_EXPIRATION: z.number().int().positive(),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_URL: z.string().url(),
    NEXT_PUBLIC_GRAPHQL_WS_URL: z.string().url(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_GRAPHQL_WS_URL: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,
    TOKEN_EXPIRATION: parseInt(process.env.TOKEN_EXPIRATION),
  },
});
