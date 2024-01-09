import { createInstance, KeyPrefix } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { FallbackNs, UseTranslationOptions } from "react-i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

const initI18next = async (lng: string, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

//* use for server side rendering only
export async function useTranslation(
  lng: string,
  ns: string,
  options?: UseTranslationOptions<KeyPrefix<FallbackNs<string>>>
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance,
  };
}
