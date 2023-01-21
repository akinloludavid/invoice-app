"use client";
import PageLayout from "@/layout/PageLayout";
import { customTheme } from "@/stylesConfig/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "@fontsource/spartan/400.css";
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/700.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={customTheme}>
          <ColorModeScript />
          <PageLayout>{children}</PageLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
