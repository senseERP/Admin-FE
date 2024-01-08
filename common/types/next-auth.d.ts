import NextAuth from "next-auth";
import { SessionModel } from "common/types/auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type Session = {
    user: SessionModel;
  };
}
