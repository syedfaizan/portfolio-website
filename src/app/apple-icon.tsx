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
          backgroundImage: "linear-gradient(135deg, #166534 0%, #15803d 60%, #34d399 100%)",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-4px",
        }}
      >
        SF
      </div>
    ),
    { ...size }
  );
}
