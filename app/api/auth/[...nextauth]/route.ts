import AppPath from "app/router/app-path";
import { env } from "env.mjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import getClient from "services/urql/getClient";
import CredentialsProvider from "next-auth/providers/credentials";

// const refreshAccessToken = async (token: JWT): Promise<JWT> => {
//   const res = await client.mutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, {
//     input: {
//       refreshToken: (token as any).refreshToken ?? "",
//     },
//   });

//   if (res.error) {
//     return { ...token, error: AppConstant.REFRESH_TOKEN_ERROR };
//   }

//   return { ...token, id: res.data?.refreshToken.userId, ...res.data?.refreshToken };
// };

export const config: NextAuthOptions = {
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
        const client = await getClient();

        // // login
        // const res = await client.mutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
        //   input: {
        //     username: credentials?.username ?? "",
        //     password: credentials?.password ?? "",
        //   },
        // });

        // if (res.error) {
        //   return null;
        // }

        // // fetch profile
        // const fetchProfileResponse = await client.query<ProfileQuery>(
        //   ProfileDocument,
        //   {},
        //   {
        //     fetchOptions: {
        //       headers: {
        //         authorization: `Bearer ${res.data?.login.token}`,
        //       },
        //     },
        //   }
        // );
        // if (fetchProfileResponse.error) {
        //   return null;
        // }

        // return {
        //   id: res.data?.login.userId,
        //   ...res.data?.login,
        //   ...fetchProfileResponse.data?.profile,
        // } as SessionModel;

        return null;
      },
    }),
  ],
  secret: env.SESSION_SECRET,
  session: {
    maxAge: env.TOKEN_EXPIRATION,
  },
  jwt: {
    maxAge: env.TOKEN_EXPIRATION,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user };
      // if (account && user) {
      //   return { ...token, ...user };
      // }
      // const currentDate = dayjs().unix();
      // const exp = dayjs((token as any).tokenExpires).unix();
      // if (currentDate < exp) return token;
      // // Refresh
      // return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export default NextAuth(config);
