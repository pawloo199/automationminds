import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Automation Minds — automatyzacja procesów biznesowych";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #1a1333 0%, #6d51fd 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>
          Automation Minds
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Automatyzacja procesów biznesowych i AI dla firm
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.85 }}>
          Bezpłatna konsultacja 30 min
        </div>
      </div>
    ),
    { ...size },
  );
}
