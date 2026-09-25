import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

// Static instances of the site fonts. ImageResponse reads ttf, otf and woff only.
const [displayFont, textFont, monoFont] = await Promise.all([
  readFile(join(process.cwd(), "assets/og/archivo-expanded-700.woff")),
  readFile(join(process.cwd(), "assets/og/archivo-500.woff")),
  readFile(join(process.cwd(), "assets/og/jetbrains-mono-500.woff")),
]);

const colors = {
  paper: "#f5f6f2",
  ink: "#101613",
  ink2: "#3a423d",
  ink3: "#59625c",
  signal: "#0f7a3d",
  alert: "#c2371a",
} as const;

// A fixed heartbeat pattern: mostly received, with one run of missed beats.
const beats = Array.from(
  { length: 52 },
  (_, index) => !(index >= 36 && index < 40),
);

type OgInput = {
  kicker: string;
  title: string;
  subtitle: string;
};

export function renderOg({ kicker, title, subtitle }: OgInput) {
  const titleSize = title.length > 22 ? 78 : 96;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: colors.paper,
          color: colors.ink,
          padding: "64px 72px",
          fontFamily: "Archivo",
          fontWeight: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 14,
                height: 14,
                background: colors.ink,
                marginRight: 16,
              }}
            />
            <div style={{ display: "flex" }}>{kicker}</div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: 24,
              color: colors.ink3,
            }}
          >
            firman-aprilian.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 960,
              fontSize: 34,
              lineHeight: 1.3,
              color: colors.ink2,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", height: 44 }}>
          {beats.map((received, index) => (
            <div
              key={index}
              style={{
                width: 12,
                height: 44,
                marginRight: 8,
                background: received ? colors.signal : colors.alert,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Archivo", data: displayFont, weight: 700, style: "normal" },
        { name: "Archivo", data: textFont, weight: 500, style: "normal" },
        {
          name: "JetBrains Mono",
          data: monoFont,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
