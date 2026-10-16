import { ImageResponse } from "next/og";
import { OgImageCard } from "@/lib/og-image";
import personalInfo from "./personal-info.json";

export const alt = `${personalInfo.name} — Tech Lead (React.js, Node.js, TypeScript)`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgImageCard />, { ...size });
}
