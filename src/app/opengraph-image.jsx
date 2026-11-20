import { ImageResponse } from "next/og";

export const alt = "Sync Sutra – WooCommerce Analytics & Multi-Store Dashboard";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#241848 0%,#120d26 60%,#3c2880 100%)", color: "white" }}>
        <div style={{ fontSize: 34, fontWeight: 700, color: "#b59bf2" }}>Sync Sutra</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>Manage every order, product and customer in one clean place.</div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#cfbff7" }}>WooCommerce analytics for multi-store teams</div>
      </div>
    ),
    size,
  );
}
