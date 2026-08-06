import { ImageResponse } from "next/og";

export const alt = "Avantika Chapegadikar — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0E17",
          backgroundImage:
            "linear-gradient(rgba(143, 168, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 168, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#34D399" }} />
          <span style={{ fontSize: 24, color: "#8FA8FF" }}>Open to Full-time Opportunities</span>
        </div>

        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#E7ECFB", lineHeight: 1 }}>
          Avantika
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#8FA8FF", lineHeight: 1.1 }}>
          Chapegadikar
        </div>

        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#8B95AB" }}>
          Software Engineer · Backend · Cloud · Data · AI
        </div>
      </div>
    ),
    { ...size }
  );
}
