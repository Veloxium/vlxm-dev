import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Veloxium Dev | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Portfolio and projects of Veloxium, a front-end web developer specializing in React, Next.js, and UI design."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
