import "./globals.css";
import type { Metadata } from "next";
import { bebas_Neue } from "./font";

export const metadata: Metadata = {
  title: "RSF - Home",
  description: "Created by Edward",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bebas_Neue.className}>{children}</body>
    </html>
  );
}
