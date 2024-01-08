"use client";

import { usePokemonsQuery } from "@graphql/pokemons.hooks";
import { useTranslation } from "app/i18n/client";
import useGraphqlErrorEffect from "hooks/use-graphql-error-effect";
import { Language } from "types/language";

type PageProps = {
  params: {
    lng: Language;
  };
};

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, "common");
  const [{ data, fetching, error }] = usePokemonsQuery();
  useGraphqlErrorEffect(error);

  return (
    <main>
      <h1>{t("hello")}</h1>
      <ul>{data?.pokemons?.map((x: any) => <li key={x.id}>{x.name}</li>)}</ul>
    </main>
  );
}
