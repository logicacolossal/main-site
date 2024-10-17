import type { Metadata } from "next";
import localFont from "next/font/local";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import "../globals.css";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const quicksand = localFont({
  src: "../fonts/Quicksand-Regular.ttf",
  variable: "--quicksand",
  weight: "500",
});

const comfortaa = localFont({
  src: "../fonts/Comfortaa-Regular.ttf",
  variable: "--comfortaa",
  weight: "400",
});

const jetBrains = localFont({
  src: "../fonts/JetBrainsMono-Regular.ttf",
  variable: "--jet-brains-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lógica Colossal",
  description: "desc",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  const ScrollbarStyle =
    "[&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70";

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/colossus-colored.svg" type="image/svg" />
      </head>
      <body
        className={`${quicksand.variable} ${comfortaa.variable} ${jetBrains.variable} antialiased ${ScrollbarStyle}`}
      >
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="colossus-theme"
        >
          <NextIntlClientProvider messages={messages}>
            <main className="relative min-h-screen font-comfortaa">
              <Navbar />
              <div className="flex flex-col gap-32 w-full">
                {children}
                <Footer />
              </div>
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
