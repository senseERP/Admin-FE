import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, name: string } | null> | null };


export const PokemonsDocument = gql`
    query Pokemons {
  pokemons {
    id
    name
  }
}
    `;