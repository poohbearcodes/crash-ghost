import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const windsorProBold = localFont({
  src: "./fonts/windsor-pro-bold.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crash Ghost",
  description: "Streetwear chaos, mascot graphics, and sticker culture.",
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.png`} sizes="any" />
        <link rel="shortcut icon" href={`${basePath}/favicon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.png`} />
      </head>
      <body className={windsorProBold.className}>{children}</body>
    </html>
  );
}
