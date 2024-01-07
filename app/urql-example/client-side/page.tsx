"use client";

import { usePokemonsQuery } from "@graphql/pokemons.hooks";
import useGraphqlErrorEffect from "hooks/use-graphql-error-effect";

export default function Page() {
  const [{ data, fetching, error }] = usePokemonsQuery();
  useGraphqlErrorEffect(error);

  return (
    <main>
      <h1>This is rendered as part of SSR</h1>
      <ul>{data?.pokemons?.map((x: any) => <li key={x.id}>{x.name}</li>)}</ul>
    </main>
  );
}
