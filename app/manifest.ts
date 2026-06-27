import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { defaultDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.name.split(" ")[0] ?? profile.name,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#3bebab",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
