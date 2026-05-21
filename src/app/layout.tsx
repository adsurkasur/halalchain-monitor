import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "../styles.css";
import "leaflet/dist/leaflet.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HalalChain — Fish Cold Chain Traceability",
  description:
    "Industrial halal cold chain traceability for Indonesia's fish logistics — IoT, RFID/NFC, and STELINA integrated.",
  authors: [{ name: "HalalChain" }],
  openGraph: {
    title: "HalalChain — Fish Cold Chain Traceability",
    description:
      "Industrial halal cold chain traceability for Indonesia's fish logistics — IoT, RFID/NFC, and STELINA integrated.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HalalChain",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
