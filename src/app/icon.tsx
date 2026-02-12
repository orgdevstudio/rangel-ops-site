import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 220,
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
            width: 340,
            height: 340,
            borderRadius: 48,
            background: "rgba(14, 165, 233, 0.2)",
            boxShadow: "0 0 60px rgba(14, 165, 233, 0.3)",
          }}
        >
          RO
        </div>
      </div>
    ),
    { ...size }
  );
}
