import * as Types from './types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function usePokemonsQuery(options?: Omit<Urql.UseQueryArgs<Operations.PokemonsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.PokemonsQuery, Operations.PokemonsQueryVariables>({ query: Operations.PokemonsDocument, ...options });
};