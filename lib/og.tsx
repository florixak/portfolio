import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import type { Project } from "@/types";

export const ogSize = {
  width: 1200,
  height: 630,
};

const ogColors = {
  background: "#171717",
  foreground: "#efefef",
  primary: "#3bebab",
  muted: "#7a7a7a",
  border: "rgba(255, 255, 255, 0.08)",
};

const loadFonts = async () => {
  const [regular, bold] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbM2oJ8Hl3Xbk3lRio.ttf",
    ).then((response) => response.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbV2oJ8Hl3Xbk8i0Rk.woff",
    ).then((response) => response.arrayBuffer()),
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

const truncate = (text: string, maxLength: number) =>
  text.length <= maxLength ? text : `${text.slice(0, maxLength - 1)}…`;

const OgCard = ({
  eyebrow,
  title,
  description,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      padding: "72px",
      background: ogColors.background,
      color: ogColors.foreground,
      fontFamily: "JetBrains Mono",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{
          fontSize: 18,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: ogColors.primary,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.05,
          maxWidth: 960,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 28,
          lineHeight: 1.4,
          color: ogColors.muted,
          maxWidth: 900,
        }}
      >
        {description}
      </div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: `1px solid ${ogColors.border}`,
        paddingTop: "32px",
        fontSize: 20,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: ogColors.muted,
      }}
    >
      <span>{footer}</span>
      <span style={{ color: ogColors.primary }}>ondrejptak.dev</span>
    </div>
  </div>
);

export const createDefaultOgImage = async () => {
  const fonts = await loadFonts();

  return new ImageResponse(
    <OgCard
      eyebrow={profile.role}
      title={profile.name}
      description={profile.tagline}
      footer="Portfolio"
    />,
    {
      ...ogSize,
      fonts,
    },
  );
};

export const createProjectOgImage = async (project: Project) => {
  const fonts = await loadFonts();
  const stackLabel =
    project.stack.length > 0
      ? project.stack.slice(0, 4).join(" · ")
      : "Full-stack project";

  return new ImageResponse(
    <OgCard
      eyebrow={`${project.year} · ${stackLabel}`}
      title={project.title}
      description={truncate(project.shortDescription, 140)}
      footer="Project case study"
    />,
    {
      ...ogSize,
      fonts,
    },
  );
};
