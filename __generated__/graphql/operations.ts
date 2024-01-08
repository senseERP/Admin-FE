import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PokemonQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type PokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, name: string } | null };

export type PokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, name: string } | null> | null };


export const PokemonDocument = gql`
    query Pokemon($id: ID!) {
  pokemon(id: $id) {
    id
    name
  }
}
    `;
export const PokemonsDocument = gql`
    query Pokemons {
  pokemons(limit: 10, skip: 0) {
    id
    name
  }
}
    `;