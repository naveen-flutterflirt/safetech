import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV & Surveillance Solutions",
  description: "High-definition CCTV and surveillance systems for homes and businesses. Enjoy 24/7 remote monitoring and advanced security with Safetech.",
};

export default function CCTVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
