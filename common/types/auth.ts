import { ProfileQuery } from "@graphql/operations";

export type ProfileModel = Omit<NonNullable<ProfileQuery["profileTenant"]>, "__typename">;

export type LoginModel = {
  userId: string;
  token: string;
  refreshToken: string;
  tokenExpires: string;
};

export type SessionModel = ProfileModel &
  LoginModel & {
    id: string;
  };
