import * as Types from './types';

import * as Operations from './operations';
import * as Urql from '@urql/next';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useLoginMutation() {
  return Urql.useMutation<Operations.LoginMutation, Operations.LoginMutationVariables>(Operations.LoginDocument);
};

export function useRefreshTokenMutation() {
  return Urql.useMutation<Operations.RefreshTokenMutation, Operations.RefreshTokenMutationVariables>(Operations.RefreshTokenDocument);
};

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<Operations.ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.ProfileQuery, Operations.ProfileQueryVariables>({ query: Operations.ProfileDocument, ...options });
};

export function useLoggedCheckQuery(options?: Omit<Urql.UseQueryArgs<Operations.LoggedCheckQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.LoggedCheckQuery, Operations.LoggedCheckQueryVariables>({ query: Operations.LoggedCheckDocument, ...options });
};