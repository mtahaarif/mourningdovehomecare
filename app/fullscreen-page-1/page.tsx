import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fullscreen Page",
  alternates: { canonical: "/fullscreen-page-1" },
  openGraph: { title: "Fullscreen Page | Home Care Agency", url: "/fullscreen-page-1" },
  twitter: { title: "Fullscreen Page | Home Care Agency" },
};

// On the original site this route only hosts Wix Pro Gallery's (empty)
// fullscreen viewer, which renders as a blank white page.
export default function FullscreenPage() {
  return <main style={{ minHeight: "100vh", background: "#fff" }} />;
}
