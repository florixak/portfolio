import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { defaultDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | ${profile.role}`,
    short_name: profile.name.split(" ")[0] ?? profile.name,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#3bebab",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
