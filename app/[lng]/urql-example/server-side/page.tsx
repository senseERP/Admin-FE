import { PokemonsDocument, PokemonsQuery, PokemonsQueryVariables } from "@graphql/operations";
import { useTranslation } from "app/i18n";
import getClient from "services/urql/getClient";
import { Language } from "types/language";

type PageProps = {
  params: {
    lng: Language;
  };
};

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "common");

  const client = getClient();

  const result = await client.query<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, {}).toPromise();

  return (
    <main>
      <h1>{t("hello")}</h1>
      <ul>{result.data?.pokemons?.map((x: any) => <li key={x.id}>{x.name}</li>)}</ul>
    </main>
  );
}
