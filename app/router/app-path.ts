import { Language } from "types/language";

function mergePath(path: string, lng?: Language) {
  if (!lng) {
    return path;
  }

  return `/${lng}${path}`;
}
function mergePathWithLang(path: string) {
  return (lng?: Language) => mergePath(path, lng);
}

const AppPath = {
  login: mergePathWithLang("/login"),
  signup: mergePathWithLang("/signup"),
};

export default AppPath;
