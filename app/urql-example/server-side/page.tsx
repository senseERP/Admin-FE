import { PokemonsDocument, PokemonsQuery, PokemonsQueryVariables } from "@graphql/operations";
import getClient from "services/urql/getClient";

export default async function Page() {
  const client = getClient();

  const result = await client.query<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, {}).toPromise();

  return (
    <main>
      <h1>This is rendered as part of an RSC</h1>
      <ul>{result.data?.pokemons?.map((x: any) => <li key={x.id}>{x.name}</li>)}</ul>
    </main>
  );
}
