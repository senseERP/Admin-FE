import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { dir } from "i18next";
import { languages } from "app/i18n/settings";

import "@mantine/core/styles.css";
import "styles/tailwind.css";
import { Language } from "types/language";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  params,
  dashboard,
  login,
}: {
  params: {
    lng: Language;
  };
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) {
  console.log(params);
  const isLoggedIn = false;
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider>{isLoggedIn ? dashboard : login}</MantineProvider>
      </body>
    </html>
  );
}
