import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veloxium Dev",
  description: "Personal Website of Veloxium Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-cursor-style="true"
      data-chrome-id="bmjmipppabdlpjccanalncobmbacckjn"
    >
      <body>{children}</body>
    </html>
  );
}
