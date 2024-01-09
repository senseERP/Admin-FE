import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { dir } from "i18next";
import { Toaster } from "@shadcn/sonner";
import { languages } from "app/i18n/settings";
import { Language } from "common/types/language";
import AuthProvider from "services/context/AuthProvider";

import "@mantine/core/styles.css";
import "styles/tailwind.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  params,
  children,
}: {
  params: {
    lng?: Language;
  };
  children: React.ReactNode;
}) {
  return (
    <html lang={params?.lng ?? "en"} dir={dir(params?.lng ?? "en")}>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          <MantineProvider>{children}</MantineProvider>

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
