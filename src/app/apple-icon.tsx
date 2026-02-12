import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #050B14 0%, #0A1624 100%)",
          fontSize: 88,
          fontWeight: 700,
          color: "#0EA5E9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "rgba(14, 165, 233, 0.2)",
            boxShadow: "0 0 32px rgba(14, 165, 233, 0.3)",
          }}
        >
          RO
        </div>
      </div>
    ),
    { ...size }
  );
}
