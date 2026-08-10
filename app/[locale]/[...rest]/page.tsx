import { notFound } from "next/navigation";

// Next.js only renders the nearest `not-found.tsx` when a route segment
// explicitly calls `notFound()` — it does *not* do so automatically for
// pathnames that simply don't match any page. This catch-all captures every
// otherwise-unmatched path under `/en/**` and `/cs/**` and forces that
// lookup, so visitors get the localized 404 from `app/[locale]/not-found.tsx`
// instead of the minimal, non-localized `app/not-found.tsx` fallback.
const CatchAllPage = () => {
  notFound();
};

export default CatchAllPage;
