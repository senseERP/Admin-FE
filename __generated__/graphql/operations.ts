import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LoginMutationVariables = Types.Exact<{
  input: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginTenant: { __typename?: 'AuthPayload', userId: any, token: string, refreshToken: string, tenant: string, tokenExpired: any } };

export type RefreshTokenMutationVariables = Types.Exact<{
  input: Types.RefreshTokenInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshTokenTenant: { __typename?: 'AuthPayload', userId: any, token: string, refreshToken: string, tenant: string, tokenExpired: any } };

export type ProfileQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profileTenant?: { __typename?: 'UserTenant', id: any, username: string, gender: Types.Gender, dateOfBirth: any, firstName: string, lastName: string, fullName: string, email: string, emailConfirmed: boolean, address?: string | null, phoneNumber: string } | null };

export type LoggedCheckQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoggedCheckQuery = { __typename?: 'Query', profileTenant?: { __typename?: 'UserTenant', id: any } | null };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  loginTenant(input: $input) {
    userId
    token
    refreshToken
    tenant
    tokenExpired
  }
}
    `;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: RefreshTokenInput!) {
  refreshTokenTenant(input: $input) {
    userId
    token
    refreshToken
    tenant
    tokenExpired
  }
}
    `;
export const ProfileDocument = gql`
    query Profile {
  profileTenant {
    id
    username
    gender
    dateOfBirth
    firstName
    lastName
    fullName
    email
    emailConfirmed
    address
    phoneNumber
  }
}
    `;
export const LoggedCheckDocument = gql`
    query LoggedCheck {
  profileTenant {
    id
  }
}
    `;