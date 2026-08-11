import type { Route } from "next";
import Link from "next/link";

// Fallback for requests that don't match the `[locale]` segment at all
// (e.g. a request that slips past the middleware matcher). In normal
// operation, visitors always land on `app/[locale]/not-found.tsx` instead,
// which is fully localized. This route has no access to next-intl context
// since it sits outside `app/[locale]/layout.tsx`, so it renders a minimal,
// framework-level document instead of reusing the site's design system.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>404 — Page not found</h1>
          <p>
            <Link href={"/" as Route}>Back home</Link>
          </p>
        </div>
      </body>
    </html>
  );
}
