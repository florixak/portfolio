import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Project } from "@/types";
import { truncate } from "@/lib/utils";

export const ogSize = {
  width: 1200,
  height: 630,
};

const colors = {
  background: "#171717",
  foreground: "#efefef",
  primary: "#3bebab",
  muted: "#a3a3a3",
};

const FONT_URLS = {
  regular:
    "https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.ttf",
  bold: "https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8L6tjPQ.ttf",
} as const;

const fetchFont = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load OG font (${response.status}): ${url}`);
  }

  return response.arrayBuffer();
};

const loadFonts = async () => {
  const [regular, bold] = await Promise.all([
    fetchFont(FONT_URLS.regular),
    fetchFont(FONT_URLS.bold),
  ]);

  return [
    {
      name: "JetBrains Mono",
      data: regular,
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      name: "JetBrains Mono",
      data: bold,
      style: "normal" as const,
      weight: 700 as const,
    },
  ];
};

const ogThumbnailPath = (thumbnail: Project["thumbnail"]) =>
  thumbnail.replace(/\.webp$/, ".png");

const loadThumbnail = async (thumbnail: Project["thumbnail"]) => {
  const pngPath = ogThumbnailPath(thumbnail);
  const filePath = join(process.cwd(), "public", pngPath.replace(/^\//, ""));
  const buffer = await readFile(filePath);

  return `data:image/png;base64,${buffer.toString("base64")}`;
};

export const createProjectOgImage = async (project: Project) => {
  const [fonts, thumbnailSrc] = await Promise.all([
    loadFonts(),
    loadThumbnail(project.thumbnail),
  ]);

  const stack = project.stack.slice(0, 4);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: ogSize.width,
        height: ogSize.height,
        position: "relative",
        background: colors.background,
        fontFamily: "JetBrains Mono",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailSrc}
        alt=""
        width={ogSize.width}
        height={ogSize.height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: ogSize.width,
          height: ogSize.height,
          background:
            "linear-gradient(to bottom, rgba(23,23,23,0.2) 0%, rgba(23,23,23,0.5) 40%, rgba(23,23,23,0.95) 100%)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "48px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.primary,
          }}
        >
          {project.year}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: colors.foreground,
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: colors.muted,
            lineHeight: 1.35,
            maxWidth: 980,
          }}
        >
          {truncate(project.shortDescription, 120)}
        </div>
        <div
          style={{
            display: stack.length > 0 ? "flex" : "none",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 4,
          }}
        >
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                fontSize: 16,
                color: colors.foreground,
                border: `1px solid ${colors.primary}`,
                padding: "6px 14px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts,
    },
  );
};
