import type { Metadata } from "next"
import { GlobalStyle } from "@/styles/global"
import StyledComponentsRegistry from "@/lib/registry"
import Head from "next/head"

export const metadata: Metadata = {
  title: "New Year's Eve",
  description: "New Year's Eve",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=K2D:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
