import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Geist_Mono, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { routing, type Locale } from "@/i18n/routing";
import { personSchema, websiteSchema } from "@/lib/schema";
import { createRootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

type LocaleParam = { locale: Locale };

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParam>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return createRootMetadata({ locale, description: t("description") });
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

const HeaderFallback = () => (
  <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/85 backdrop-blur-md" />
);

// Pre-render `/en` and `/cs` at build time instead of on demand.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this layout and everything nested below it.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-mono",
        jetbrainsMono.variable,
        geistMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[personSchema, websiteSchema]} />
        {/* Makes messages resolved via `i18n/request.ts` available to Client Components. */}
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<HeaderFallback />}>
              <Header />
            </Suspense>
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
