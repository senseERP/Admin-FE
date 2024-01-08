import { Language } from "types/language";

export const fallbackLng: Language = "en";
export const languages: Language[] = [fallbackLng, "vi"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng: string = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
