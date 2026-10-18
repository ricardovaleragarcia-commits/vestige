import "@fontsource/stix-two-text/400.css";
import "./globals.css";

export const metadata = {
  title: "Vestige",
  description: "Digital archive of vestiges from failed futures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
