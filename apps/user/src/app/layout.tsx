import "./globals.css";
import "@repo/ui/globals.css";
import FontPretendard from "@/fonts/FontPretendard";
import { cn } from "@repo/util/style/tailwind.util";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={cn("antialiased", FontPretendard.className)}>{children}</body>
    </html>
  );
}
