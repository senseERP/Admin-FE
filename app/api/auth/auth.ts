import dayjs from "dayjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  ProfileDocument,
  ProfileQuery,
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from "@graphql/operations";
import AppPath from "app/router/app-path";
import AppConstants from "common/app-constants";
import { SessionModel } from "common/types/auth";
import { env } from "env.mjs";
import getClient from "services/urql/getClient";

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  const client = getClient({
    hasAuth: false,
  });
  const res = await client.mutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, {
    input: {
      refreshToken: (token as any).refreshToken ?? "",
    },
  });

  if (res.error) {
    return { ...token, error: AppConstants.REFRESH_TOKEN_ERROR };
  }

  return { ...token, id: res.data?.refreshTokenTenant.userId, ...res.data?.refreshTokenTenant };
};

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: AppPath.login(),
    signOut: AppPath.signup(),
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = getClient({
          hasAuth: false,
        });

        // login
        const res = await client.mutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
          input: {
            username: credentials?.username ?? "",
            password: credentials?.password ?? "",
          },
        });

        if (res.error) {
          return null;
        }

        // fetch profile
        const fetchProfileResponse = await client.query<ProfileQuery>(
          ProfileDocument,
          {},
          {
            fetchOptions: {
              headers: {
                authorization: `Bearer ${res.data?.loginTenant.token}`,
              },
            },
          }
        );
        if (fetchProfileResponse.error) {
          return null;
        }

        return {
          id: res.data?.loginTenant.userId,
          userId: res.data?.loginTenant.userId,
          token: res.data?.loginTenant.token,
          refreshToken: res.data?.loginTenant.refreshToken,
          tokenExpired: res.data?.loginTenant.tokenExpired,
          // ...res.data?.loginTenant,
          // ...fetchProfileResponse.data?.profileTenant,
        } as SessionModel;
      },
    }),
  ],
  // secret: env.SESSION_SECRET,
  session: {
    maxAge: env.TOKEN_EXPIRATION,
  },
  jwt: {
    maxAge: env.TOKEN_EXPIRATION,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return { ...token, ...user };
      }
      const currentDate = dayjs().unix();
      const exp = dayjs((token as any).tokenExpired).unix();
      if (currentDate < exp) return token;
      // Refresh
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
