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
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: Language;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
