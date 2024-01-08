import * as Types from './types';

import * as Operations from './operations';
import * as Urql from '@urql/next';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function usePokemonQuery(options: Omit<Urql.UseQueryArgs<Operations.PokemonQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.PokemonQuery, Operations.PokemonQueryVariables>({ query: Operations.PokemonDocument, ...options });
};